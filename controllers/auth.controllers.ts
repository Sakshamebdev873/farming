// src/controllers/auth.controller.ts

import type { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import type { AuthenticatedRequest } from '../middleware/auth.middleware.js'; // Import our custom type

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '30d';

/**
 * @desc    Register a new user
 * @route   POST /api/v1/users/register
 * @access  Public
 */
export const registerUser = expressAsyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    // Validation is already handled by middleware, so we can trust the body
    const { email, password, name } = req.body;

    // We no longer need to check if user exists because the global
    // error handler will catch the Prisma 'P2002' error (unique constraint)
    // which is more efficient (avoids two DB calls).

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Respond with user data (excluding password) and a token
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  }
);

/**
 * @desc    Authenticate (login) a user
 * @route   POST /api/v1/users/login
 * @access  Public
 */
export const loginUser = expressAsyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    // Check if user exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401); // 401 Unauthorized
      throw new Error('Invalid email or password');
    }
  }
);

/**
 * @desc    Get current user's profile
 * @route   GET /api/v1/users/me
 * @access  Private
 */
export const getMe = expressAsyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    // --- OPTIMIZED ---
    // The user object (minus password) is already attached by the 'protect' middleware.
    // No database call is needed here.
    res.json(req.user);
  }
);

// --- Helper Function ---
const generateToken = (id: string): string => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};