import type { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../../../shared/conn.mysql.js";
import PasajeService from "../Services/Pasaje.Service.js";
import CrearPasajeDto from "../dto/crear-pasaje.dto.js";
import ActualizarPasajeDto from "../dto/actualizar-pasaje.dto.js";
import RespuestaPasajeDto from "../dto/respuesta-pasaje.dto.js";

type PasajeRow = RowDataPacket & {
  id_pasaje: number;
  id_reserva: number;
  id_vuelo: number;
  precio: number;
  fecha: string;
  hora: string;
};

export default class PasajeServiceImpl extends PasajeService {
  private toDto(row: PasajeRow): RespuestaPasajeDto {
    return new RespuestaPasajeDto(
      row.id_pasaje,
      row.id_reserva,
      row.id_vuelo,
      Number(row.precio),
      row.fecha,
      row.hora,
    );
  }

  private async findById(id: number): Promise<RespuestaPasajeDto | undefined> {
    const [rows] = await db.query<PasajeRow[]>(
      "SELECT id_pasaje, id_reserva, id_vuelo, precio, fecha, hora FROM pasajes WHERE id_pasaje = ?",
      [id],
    );
    return rows[0] ? this.toDto(rows[0]) : undefined;
  }

  async create(
    pasaje: CrearPasajeDto,
  ): Promise<RespuestaPasajeDto | undefined> {
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO pasajes (id_reserva, id_vuelo, precio, fecha, hora)
       VALUES (?, ?, ?, ?, ?)`,
      [
        pasaje.idReserva,
        pasaje.idVuelo,
        pasaje.precio,
        pasaje.fecha,
        pasaje.hora,
      ],
    );
    return this.findById(result.insertId);
  }

  async update(
    id: number,
    pasaje: ActualizarPasajeDto,
  ): Promise<RespuestaPasajeDto | undefined> {
    const fields = Object.entries(pasaje).filter(
      ([, value]) => value !== undefined,
    ) as [keyof ActualizarPasajeDto, string | number][];
    if (fields.length === 0) {
      return this.findById(id);
    }

    const columnMap: Record<keyof ActualizarPasajeDto, string> = {
      idReserva: "id_reserva",
      idVuelo: "id_vuelo",
      precio: "precio",
      fecha: "fecha",
      hora: "hora",
    };
    const values: (string | number)[] = fields.map(([, value]) => value);
    values.push(id);
    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE pasajes SET ${fields
        .map(([field]) => `${columnMap[field]} = ?`)
        .join(", ")}
       WHERE id_pasaje = ?`,
      values,
    );
    return result.affectedRows ? this.findById(id) : undefined;
  }

  async delete(id: number): Promise<RespuestaPasajeDto | undefined> {
    const pasaje = await this.findById(id);
    if (!pasaje) {
      return undefined;
    }

    await db.execute("DELETE FROM pasajes WHERE id_pasaje = ?", [id]);
    return pasaje;
  }
}