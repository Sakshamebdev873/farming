// src/middleware/auth.middleware.ts
import jwt, {} from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
export const protect = expressAsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            // Verify the token safely
            // @ts-ignore
            const decoded = jwt.verify(token, JWT_SECRET);
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
        }
        catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});
//# sourceMappingURL=auth.middleware.js.map