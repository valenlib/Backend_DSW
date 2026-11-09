import { Request, Response } from "express";
import RegistroService from "../Services/Registro.service.js";
import CrearUsuarioDto from "../dto/crear-usuario.dto.js";
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}
  async registrarUsuario(req: Request, res: Response): Promise<void> {
    const response = await this.registroService.registrarUsuario(
      req.body as CrearUsuarioDto,
    );
    res.status(201).json(response);
  }
}
