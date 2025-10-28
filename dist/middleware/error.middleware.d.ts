import type { Request, Response, NextFunction } from 'express';
/**
 * Handles requests for routes that do not exist (404).
 */
export declare const notFound: (req: Request, res: Response, next: NextFunction) => void;
/**
 * Global error handler. Catches all errors and formats them into a JSON response.
 */
export declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error.middleware.d.ts.map