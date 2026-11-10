import { Request, Response } from "express";
import PasajeService from "../Services/Pasaje.Service.js";

export default class PasajeController {
  constructor(private readonly pasajeService: PasajeService) {}

  async create(req: Request, res: Response): Promise<void> {
    res.status(201).json(await this.pasajeService.create(req.body));
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.pasajeService.delete(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: "Pasaje no encontrado" });
      return;
    }
    res.status(200).json(response);
  }

  async update(req: Request, res: Response): Promise<void> {
    const response = await this.pasajeService.update(
      Number(req.params.id),
      req.body,
    );
    if (!response) {
      res.status(404).json({ message: "Pasaje no encontrado" });
      return;
    }
    res.status(200).json(response);
  }
}