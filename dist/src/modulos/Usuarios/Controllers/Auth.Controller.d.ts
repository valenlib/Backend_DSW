import { Request, Response } from 'express';
import AuthService from '../Services/Auth.Service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
    refresh(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Auth.Controller.d.ts.map