import { Request, Response } from 'express';
import RegistroService from '../Services/Registro.service';
import Usuario from '../Entity/Usuario.entity';

export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  async registrarUsuario(req: Request, res: Response): Promise<void> {
    const response = await this.registroService.registrarUsuario(
      req.body as Usuario,
    );
    res.json(response);
  }
}
