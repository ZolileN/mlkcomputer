# MLK Computer Web Application

## Overview

This is a modern full-stack web application for MLK Computer, an innovative ICT solutions provider and design agency. The application serves as a comprehensive business website featuring services showcase, company information, client testimonials, and contact functionality. Built with a React frontend and Express backend, it demonstrates modern web development practices with a focus on user experience and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions with intersection observers for scroll-triggered effects
- **State Management**: TanStack React Query for server state management and API caching
- **Forms**: React Hook Form with Hookform Resolvers for form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript for type-safe server-side development
- **Framework**: Express.js for RESTful API endpoints with middleware support
- **Development**: TSX for TypeScript execution in development mode
- **Database Integration**: Prepared for Drizzle ORM with PostgreSQL support via Neon serverless driver
- **Session Management**: Configured for connect-pg-simple session store
- **Error Handling**: Global error middleware for consistent API responses
- **Logging**: Custom request/response logging middleware for API monitoring

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Validation**: Zod integration with Drizzle for runtime type validation

### Design System
- **Component Library**: Comprehensive shadcn/ui components including forms, navigation, cards, dialogs, and data display
- **Typography**: Inter font family with fallbacks for consistent text rendering
- **Color Scheme**: Custom CSS variables supporting light/dark themes with semantic color tokens
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Built on Radix UI primitives ensuring ARIA compliance and keyboard navigation

### Development Tooling
- **Package Management**: npm with lock file for dependency consistency
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Build Process**: Separate client and server builds with ESBuild for server bundling
- **Hot Reload**: Vite HMR for instant development feedback
- **Path Aliases**: Configured import aliases for cleaner code organization

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for processing
- **Animation**: Framer Motion for advanced animations and gestures
- **Database**: Neon Database serverless PostgreSQL with Drizzle ORM
- **Server**: Express.js with TypeScript support

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TSX for TypeScript execution
- **Type Safety**: TypeScript with strict configuration
- **Database Tools**: Drizzle Kit for schema management and migrations
- **Session Storage**: PostgreSQL session store for production deployment

### Replit Integration
- **Development Tools**: Replit-specific Vite plugins for error overlay and development banner
- **Cartographer**: Replit's code mapping tool for enhanced development experience
- **Runtime Error Modal**: Enhanced error reporting in development environment

### Third-party Services
- **Font Loading**: Google Fonts integration for typography
- **Image Assets**: Unsplash integration for high-quality stock photography
- **Icons**: Lucide React icon library for consistent iconography
- **Date Handling**: date-fns library for date manipulation and formatting