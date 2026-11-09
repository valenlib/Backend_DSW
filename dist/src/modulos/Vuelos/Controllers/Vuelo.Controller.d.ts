import { Request, Response } from "express";
import VueloService from "../Services/Vuelo.Service.js";
export default class VueloController {
    private readonly vueloService;
    constructor(vueloService: VueloService);
    findAll(req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Vuelo.Controller.d.ts.map