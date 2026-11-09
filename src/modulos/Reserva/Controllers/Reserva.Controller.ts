import { Request, Response } from 'express';
import ReservaService from '../Services/Reserva.Service';

export default class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    res.status(200).json(await this.reservaService.findAll());
  }

  async findById(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.findById(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: 'Reserva no encontrada' });
      return;
    }
    res.status(200).json(response);
  }

  async create(req: Request, res: Response): Promise<void> {
    res.status(201).json(await this.reservaService.create(req.body));
  }

  async update(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.update(
      Number(req.params.id),
      req.body,
    );
    if (!response) {
      res.status(404).json({ message: 'Reserva no encontrada' });
      return;
    }
    res.status(200).json(response);
  }

  async logicalDelete(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.logicalDelete(
      Number(req.params.id),
    );
    if (!response) {
      res.status(404).json({ message: 'Reserva no encontrada' });
      return;
    }
    res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.delete(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: 'Reserva no encontrada' });
      return;
    }
    res.status(200).json(response);
  }
}