import { Request, Response } from 'express';
import ReservaService from '../Services/Reserva.Service';
export default class ReservaController {
    private readonly reservaService;
    constructor(reservaService: ReservaService);
    findAll(req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    findByEmail(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    logicalDelete(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Reserva.Controller.d.ts.map