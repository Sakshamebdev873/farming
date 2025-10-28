/**
 * @desc    Register a new user
 * @route   POST /api/v1/users/register
 * @access  Public
 */
export declare const registerUser: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * @desc    Authenticate (login) a user
 * @route   POST /api/v1/users/login
 * @access  Public
 */
export declare const loginUser: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * @desc    Get current user's profile
 * @route   GET /api/v1/users/me
 * @access  Private
 */
export declare const getMe: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const generateToken: (id: string) => string;
//# sourceMappingURL=auth.controllers.d.ts.map