import { Request, Response } from 'express';
import AdminService from '../Services/Admin.Service';
import Usuario from '../Entity/Usuario.entity';

export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.findAll();
    res.status(200).json(response);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.findById(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json(response);
  }

  async findByCriterio(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.findByCriterio(
      String(req.params.criterio),
    );
    res.status(200).json(response);
  }

  async update(req: Request, res: Response): Promise<void> {
    const usuario = new Usuario(
      Number(req.params.id),
      req.body.nombre,
      req.body.apellido,
      req.body.email,
    );
    const response = await this.adminService.update(
      Number(req.params.id),
      usuario,
    );
    if (!response) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.delete(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json(response);
  }
}
