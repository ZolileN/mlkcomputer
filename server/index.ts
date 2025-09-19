import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js";
import { setupVite, log } from "./vite.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { type Server } from 'http';
import helmet from 'helmet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// Security middleware with development configuration
app.use(helmet({
  contentSecurityPolicy: isProduction ? undefined : false
}));

// Trust first proxy (important if behind a reverse proxy like Nginx)
app.set('trust proxy', 1);

// HTTPS redirection for production only
if (isProduction) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(301, `https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  throw err;
});

async function startServer() {
  try {
    const server = await registerRoutes(app);
    
    // Configure static file serving based on environment
    if (process.env.NODE_ENV === 'production') {
      const clientDistPath = path.join(__dirname, '../../client/dist');
      
      // Serve static files
      app.use(express.static(clientDistPath));
      
      // Handle SPA routing - return the index.html for all other routes
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.join(clientDistPath, 'index.html'));
      });
      log('Production mode: Serving static files from', clientDistPath);
    } else {
      await setupVite(app, server);
      log('Development mode: Vite dev server enabled');
    }

    const port = parseInt(process.env.PORT || '3000', 10);
    
    server.listen(port, '0.0.0.0', () => {
      log(`Server is running on port ${port}`);
      log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
    
    return server;
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

// Start the server
startServer().catch(err => {
  console.error('Fatal error during server startup:', err);
  process.exit(1);
});
