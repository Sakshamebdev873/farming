// src/middleware/auth.middleware.ts

import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

// We extend the Express Request type to include our user payload
export interface AuthenticatedRequest extends Request {
  user?: Omit<User, 'password'>; // Attach user object (omitting the password)
}

export const protect = expressAsyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

        // --- OPTIMIZATION & EDGE CASE ---
        // Fetch the user from the token ID and *exclude the password*.
        // This handles the edge case where a token is valid, but the user has been deleted.
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        if (!user) {
          res.status(401);
          throw new Error('Not authorized, user not found');
        }

        // Attach the user object (without password) to the request
        req.user = user;
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    }

    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  }
);