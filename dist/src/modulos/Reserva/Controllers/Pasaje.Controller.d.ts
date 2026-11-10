import { Request, Response } from "express";
import PasajeService from "../Services/Pasaje.Service.js";
export default class PasajeController {
    private readonly pasajeService;
    constructor(pasajeService: PasajeService);
    create(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Pasaje.Controller.d.ts.map