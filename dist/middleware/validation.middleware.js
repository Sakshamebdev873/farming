// src/middleware/validation.middleware.ts
import { validationResult } from 'express-validator';
/**
 * Checks for validation errors from express-validator.
 * If errors exist, it sends a 400 response. Otherwise, it calls next().
 */
export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // 400 Bad Request
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
//# sourceMappingURL=validation.middleware.js.map