import { Request, Response } from "express";
import RegistroService from "../Services/Registro.service.js";
export declare class RegistroController {
    private readonly registroService;
    constructor(registroService: RegistroService);
    registrarUsuario(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Registro.Controller.d.ts.map