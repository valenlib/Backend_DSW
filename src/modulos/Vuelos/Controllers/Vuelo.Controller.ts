import { Request, Response } from "express";
import VueloService from "../Services/Vuelo.Service.js";

export default class VueloController {
  constructor(private readonly vueloService: VueloService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    res.status(200).json(await this.vueloService.findAll());
  }

  async findById(req: Request, res: Response): Promise<void> {
    const response = await this.vueloService.findById(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: "Vuelo no encontrado" });
      return;
    }
    res.status(200).json(response);
  }

  async create(req: Request, res: Response): Promise<void> {
    const response = await this.vueloService.create(req.body);
    res.status(201).json(response);
  }

  async update(req: Request, res: Response): Promise<void> {
    const response = await this.vueloService.update(
      Number(req.params.id),
      req.body,
    );
    if (!response) {
      res.status(404).json({ message: "Vuelo no encontrado" });
      return;
    }
    res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.vueloService.delete(Number(req.params.id));
    if (!response) {
      res.status(404).json({ message: "Vuelo no encontrado" });
      return;
    }
    res.status(200).json(response);
  }
}
