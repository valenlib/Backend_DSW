import { Request, Response } from 'express';
import AdminService from '../Services/Admin.Service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    findAll(req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    findByCriterio(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    logicalDelete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Admin.Controller.d.ts.map