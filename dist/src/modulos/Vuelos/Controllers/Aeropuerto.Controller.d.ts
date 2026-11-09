import { Request, Response } from 'express';
import AeropuertoService from '../Services/Aeropuerto.Service';
export default class AeropuertoController {
    private readonly aeropuertoService;
    constructor(aeropuertoService: AeropuertoService);
    findAll(req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    logicalDelete(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Aeropuerto.Controller.d.ts.map