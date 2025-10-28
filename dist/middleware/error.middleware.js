// src/middleware/error.middleware.ts
import { Prisma } from '@prisma/client';
/**
 * Handles requests for routes that do not exist (404).
 */
export const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
/**
 * Global error handler. Catches all errors and formats them into a JSON response.
 */
export const errorHandler = (err, req, res, next) => {
    // Use the response's status code if it's already set, otherwise default to 500
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    // --- Handle Specific Prisma Errors (Edge Cases) ---
    // P2002: Unique constraint violation (e.g., email already exists)
    if (err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002') {
        statusCode = 400; // Bad Request
        const fields = err.meta?.target?.join(', ');
        message = `A user with this ${fields} already exists.`;
    }
    // P2025: Record to update/delete not found
    if (err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2025') {
        statusCode = 404; // Not Found
        message = 'Record not found.';
    }
    // --- Send Final JSON Response ---
    res.status(statusCode).json({
        message: message,
        // Only show the stack trace if not in production
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};
//# sourceMappingURL=error.middleware.js.map