// src/server.ts

import express, { type Request, type Response } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet'; // For security headers
import morgan from 'morgan'; // For logging
import { notFound, errorHandler } from './middleware/error.middleware';
import authRoutes from './routes/auth.routes';

// Load .env variables
dotenv.config();

// Ensure critical environment variables are set
if (!process.env.DATABASE_URL) {
  console.error('FATAL ERROR: DATABASE_URL is not set.');
  process.exit(1);
}
if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET is not set.');
  process.exit(1);
}

const app = express();
const PORT = process.env.USER_SERVICE_PORT || 5001;

// --- Core Middleware ---

// Enable CORS (Cross-Origin Resource Sharing)
// In production, you'd restrict this to your API Gateway's URL
app.use(cors());

// Set various security HTTP headers
app.use(helmet());

// HTTP request logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parsers
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// --- API Routes ---

// Health check endpoint for your API Gateway or a load balancer
app.get('/api/v1/users/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', service: 'User Service' });
});

// Mount the authentication routes
app.use('/api/v1/users', authRoutes);

// --- Error Handling Middleware ---
// These MUST be defined last, after all routes

// 404 Not Found handler
app.use(notFound);

// Custom global error handler (catches errors from async-handler, etc.)
app.use(errorHandler);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(
    `🚀 User Service running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});