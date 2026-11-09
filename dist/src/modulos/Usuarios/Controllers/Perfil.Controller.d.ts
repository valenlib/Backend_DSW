import { Request, Response } from 'express';
import PerfilService from '../Services/Perfil.Service';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    actualizarPerfil(req: Request, res: Response): Promise<void>;
    logicalDelete(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=Perfil.Controller.d.ts.map