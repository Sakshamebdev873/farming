import type { Request } from 'express';
import { type User } from '@prisma/client';
export interface AuthenticatedRequest extends Request {
    user?: Omit<User, 'password'>;
}
export declare const protect: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
//# sourceMappingURL=auth.middleware.d.ts.map