import { Request, Response } from 'express';
import AdminService from '../Services/Admin.Service';
import Usuario from '../Entity/Usuario.entity';

export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.findAll();
    res.json(response);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.findById(Number(req.params.id));
    res.json(response);
  }

  async findByCriterio(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.findByCriterio(
      String(req.params.criterio),
    );
    res.json(response);
  }

  async update(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.update(
      Number(req.params.id),
      req.body as Usuario,
    );
    res.json(response);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.adminService.delete(Number(req.params.id));
    res.json(response);
  }
}
