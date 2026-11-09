import type { NextFunction, Request, Response } from 'express';
import { AuthPayload, UserRole } from './AuthJWT';
declare global {
    namespace Express {
        interface Request {
            auth?: AuthPayload;
        }
    }
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): void;
export declare function requireRole(...roles: UserRole[]): (req: Request, res: Response, next: NextFunction) => void;
export declare function requireSelfOrRole(...roles: UserRole[]): (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map