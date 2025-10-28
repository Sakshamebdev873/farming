import type { Request, Response, NextFunction } from 'express';
/**
 * Checks for validation errors from express-validator.
 * If errors exist, it sends a 400 response. Otherwise, it calls next().
 */
export declare const validateRequest: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validation.middleware.d.ts.map