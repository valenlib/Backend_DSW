import type { NextFunction, Request, Response } from "express";
export declare function validateCreateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function validateLogin(req: Request, res: Response, next: NextFunction): void;
export declare function validateUserUpdate(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function validateId(req: Request, res?: Response, next?: NextFunction): void;
export declare function validateSearchCriteria(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=user-validation.d.ts.map