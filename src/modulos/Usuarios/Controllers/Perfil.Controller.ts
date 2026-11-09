import { Request, Response } from "express";
import PerfilService from "../Services/Perfil.Service.js";
import ActualizarPerfilDto from "../dto/actualizar-perfil.dto.js";
import LogicalDeletePerfilDto from "../dto/logical-delete-perfil.dto.js";
import DeletePerfilDto from "../dto/delete-perfil.dto.js";
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}
  async actualizarPerfil(req: Request, res: Response): Promise<void> {
    const response = await this.perfilService.actualizarPerfil(
      req.body as ActualizarPerfilDto,
    );
    res.json(response);
  }
  async logicalDelete(req: Request, res: Response): Promise<void> {
    const response = await this.perfilService.logicalDelete(
      req.body as LogicalDeletePerfilDto,
    );
    res.json(response);
  }
  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.perfilService.delete(
      req.body as DeletePerfilDto,
    );
    res.json(response);
  }
}
