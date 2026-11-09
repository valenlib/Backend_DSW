import { Request, Response } from 'express';
import AeropuertoService from '../Services/Aeropuerto.Service';

export default class AeropuertoController {
  constructor(private readonly aeropuertoService: AeropuertoService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    res.status(200).json(await this.aeropuertoService.findAll());
  }

  async findById(req: Request, res: Response): Promise<void> {
    const response = await this.aeropuertoService.findById(
      Number(req.params.id),
    );
    if (!response) {
      res.status(404).json({ message: 'Aeropuerto no encontrado' });
      return;
    }

    res.status(200).json(response);
  }

  async create(req: Request, res: Response): Promise<void> {
    const response = await this.aeropuertoService.create(req.body);
    res.status(201).json(response);
  }

  async update(req: Request, res: Response): Promise<void> {
    const response = await this.aeropuertoService.update(
      Number(req.params.id),
      req.body,
    );
    if (!response) {
      res.status(404).json({ message: 'Aeropuerto no encontrado' });
      return;
    }

    res.status(200).json(response);
  }

  async logicalDelete(req: Request, res: Response): Promise<void> {
    const response = await this.aeropuertoService.logicalDelete(
      Number(req.params.id),
    );
    if (!response) {
      res.status(404).json({ message: 'Aeropuerto no encontrado' });
      return;
    }

    res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.aeropuertoService.delete(
      Number(req.params.id),
    );
    if (!response) {
      res.status(404).json({ message: 'Aeropuerto no encontrado' });
      return;
    }

    res.status(200).json(response);
  }
}