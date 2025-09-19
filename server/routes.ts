import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  service?: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a test account for development
  // const testAccount = await nodemailer.createTestAccount();

  // Create reusable transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use an App Password if 2FA is enabled
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, service, message } = req.body as ContactFormData;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address' });
      }

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'zolile.nonzaba@gmail.com',
        subject: service ? `Contact Form: ${service}` : 'New Contact Form Submission',
        text: message,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ 
        error: 'Failed to send message', 
        details: errorMessage 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
