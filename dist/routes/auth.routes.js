// src/routes/auth.routes.ts
import { Router } from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser, getMe } from '../controllers/auth.controllers.js';
import { protect } from '../middleware/auth.middleware.js';
import { validateRequest } from '../middleware/validation.middleware.js';
const router = Router();
// --- Validation Chains ---
const registerValidation = [
    body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().optional().trim().withMessage('Name cannot be empty'),
];
const loginValidation = [
    body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
];
// --- Route Definitions ---
// @route   POST /api/v1/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerValidation, validateRequest, registerUser);
// @route   POST /api/v1/users/login
// @desc    Authenticate (login) a user
// @access  Public
router.post('/login', loginValidation, validateRequest, loginUser);
// @route   GET /api/v1/users/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', protect, getMe);
export default router;
//# sourceMappingURL=auth.routes.js.map