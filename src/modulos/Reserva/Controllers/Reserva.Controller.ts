import { Request, Response } from "express";
import ReservaService from "../Services/Reserva.Service.js";
export default class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}
  async findAll(req: Request, res: Response): Promise<void> {
    res
      .status(200)
      .json(await this.reservaService.findAll(req.auth!.id, req.auth!.rol));
  }
  async findById(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.findById(
      Number(req.params.id),
      req.auth!.id,
      req.auth!.rol,
    );
    if (!response) {
      res.status(404).json({ message: "Reserva no encontrada" });
      return;
    }
    res.status(200).json(response);
  }
  async findByEmail(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.findByEmail(
      String(req.params.email),
    );
    if (!response) {
      res.status(404).json({ message: "Reserva no encontrada" });
      return;
    }
    res.status(200).json(response);
  }
  async create(req: Request, res: Response): Promise<void> {
    res
      .status(201)
      .json(
        await this.reservaService.create(req.body, req.auth!.id, req.auth!.rol),
      );
  }
  async update(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.update(
      Number(req.params.id),
      req.body,
      req.auth!.id,
      req.auth!.rol,
    );
    if (!response) {
      res.status(404).json({ message: "Reserva no encontrada" });
      return;
    }
    res.status(200).json(response);
  }
  async logicalDelete(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.logicalDelete(
      Number(req.params.id),
      req.auth!.id,
      req.auth!.rol,
    );
    if (!response) {
      res.status(404).json({ message: "Reserva no encontrada" });
      return;
    }
    res.status(200).json(response);
  }
  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.reservaService.delete(
      Number(req.params.id),
      req.auth!.id,
      req.auth!.rol,
    );
    if (!response) {
      res.status(404).json({
        message: "Solo se pueden borrar físicamente reservas canceladas",
      });
      return;
    }
    res.status(200).json(response);
  }
}
