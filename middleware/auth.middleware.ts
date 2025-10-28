// src/middleware/auth.middleware.ts

import type { Request, Response, NextFunction } from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import { PrismaClient, type User } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

// We extend the Express Request type to include our user payload
export interface AuthenticatedRequest extends Request {
  user?: Omit<User, 'password'>; // Attach user object (omitting the password)
}

interface DecodedToken extends JwtPayload {
  id: string;
}

export const protect = expressAsyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        // Verify the token safely
        // @ts-ignore
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

        if (!decoded || !decoded.id) {
          res.status(401);
          throw new Error("Not authorized, invalid token payload");
        }

        // Fetch user from DB
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
          throw new Error("Not authorized, user not found");
        }

        req.user = user;
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);