import type { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../../../shared/conn.mysql';
import AeropuertoService from '../Services/Aeropuerto.Service';
import CrearAeropuertoDto from '../dto/crear-aeropuerto.dto';
import ActualizarAeropuertoDto from '../dto/actualizar-aeropuerto.dto';
import RespuestaAeropuertoDto from '../dto/respuesta-aeropuerto.dto';

type AeropuertoRow = RowDataPacket & {
  id_aeropuerto: number;
  nombre: string;
  ciudad: string;
  pais: string;
};

export default class AeropuertoServiceImpl extends AeropuertoService {
  private toDto(row: AeropuertoRow): RespuestaAeropuertoDto {
    return new RespuestaAeropuertoDto(
      row.id_aeropuerto,
      row.nombre,
      row.ciudad,
      row.pais,
    );
  }

  async findAll(): Promise<RespuestaAeropuertoDto[]> {
    const [rows] = await db.query<AeropuertoRow[]>(
      `SELECT id_aeropuerto, nombre, ciudad, pais
       FROM aeropuertos WHERE activo = TRUE ORDER BY id_aeropuerto`,
    );
    return rows.map((row) => this.toDto(row));
  }

  async findById(id: number): Promise<RespuestaAeropuertoDto | undefined> {
    const [rows] = await db.query<AeropuertoRow[]>(
      `SELECT id_aeropuerto, nombre, ciudad, pais
       FROM aeropuertos
       WHERE id_aeropuerto = ? AND activo = TRUE`,
      [id],
    );
    return rows[0] ? this.toDto(rows[0]) : undefined;
  }

  async create(
    aeropuerto: CrearAeropuertoDto,
  ): Promise<RespuestaAeropuertoDto | undefined> {
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO aeropuertos (nombre, ciudad, pais) VALUES (?, ?, ?)`,
      [aeropuerto.nombre, aeropuerto.ciudad, aeropuerto.pais],
    );
    return this.findById(result.insertId);
  }

  async update(
    id: number,
    aeropuerto: ActualizarAeropuertoDto,
  ): Promise<RespuestaAeropuertoDto | undefined> {
    const fields = Object.entries(aeropuerto).filter(
      ([, value]) => value !== undefined,
    ) as [keyof ActualizarAeropuertoDto, string][];
    if (fields.length === 0) {
      return this.findById(id);
    }

    const values: string[] = fields.map(([, value]) => value.trim());
    values.push(String(id));
    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE aeropuertos SET ${fields
        .map(([field]) => `${field} = ?`)
        .join(', ')}
       WHERE id_aeropuerto = ? AND activo = TRUE`,
      values,
    );
    return result.affectedRows ? this.findById(id) : undefined;
  }

  async logicalDelete(id: number): Promise<RespuestaAeropuertoDto | undefined> {
    const aeropuerto = await this.findById(id);
    if (!aeropuerto) {
      return undefined;
    }

    await db.execute(
      'UPDATE aeropuertos SET activo = FALSE WHERE id_aeropuerto = ? AND activo = TRUE',
      [id],
    );
    return aeropuerto;
  }

  async delete(id: number): Promise<RespuestaAeropuertoDto | undefined> {
    const aeropuerto = await this.findById(id);
    if (!aeropuerto) {
      return undefined;
    }

    await db.execute('DELETE FROM aeropuertos WHERE id_aeropuerto = ?', [id]);
    return aeropuerto;
  }
}
