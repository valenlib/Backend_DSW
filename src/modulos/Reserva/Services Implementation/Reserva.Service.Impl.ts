import type { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../../../shared/conn.mysql';
import ReservaService from '../Services/Reserva.Service';
import RespuestaReservaDto from '../dto/respuesta-reserva.dto';
import CrearReservaDto from '../dto/crear-reserva.dto';
import ActualizarReservaDto from '../dto/actualizar-reserva.dto';

type ReservaRow = RowDataPacket & {
  id_reserva: number;
  id_viaje: number;
  nombre: string;
  apellido: string;
  email: string;
  cantidad_pasajes: number;
  precio_total: number;
};

export default class ReservaServiceImpl extends ReservaService {
  private readonly selectQuery = `
    SELECT r.id_reserva, r.id_viaje, r.cantidad_pasajes,
           u.nombre, u.apellido, u.email,
           v.precio * r.cantidad_pasajes AS precio_total
    FROM reservas r
    INNER JOIN usuarios u ON u.id_usuario = r.id_usuario AND u.activo = TRUE
    INNER JOIN viajes v ON v.id_viaje = r.id_viaje
  `;

  private toDto(row: ReservaRow): RespuestaReservaDto {
    return new RespuestaReservaDto(
      row.id_reserva,
      row.id_viaje,
      `${row.nombre} ${row.apellido}`,
      row.email,
      row.cantidad_pasajes,
      Number(row.precio_total),
    );
  }

  async findAll(): Promise<RespuestaReservaDto[]> {
    const [rows] = await db.query<ReservaRow[]>(
      `${this.selectQuery} WHERE r.activa = TRUE ORDER BY r.id_reserva`,
    );
    return rows.map((row) => this.toDto(row));
  }

  async findById(id: number): Promise<RespuestaReservaDto | undefined> {
    const [rows] = await db.query<ReservaRow[]>(
      `${this.selectQuery} WHERE r.id_reserva = ? AND r.activa = TRUE`,
      [id],
    );
    return rows[0] ? this.toDto(rows[0]) : undefined;
  }

  async create(
    reserva: CrearReservaDto,
  ): Promise<RespuestaReservaDto | undefined> {
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO reservas
       (id_viaje, id_usuario, estado, cantidad_pasajes)
       VALUES (?, ?, 'pendiente', ?)`,
      [reserva.idViaje, reserva.idUsuario, reserva.cantidadPasajes],
    );
    return this.findById(result.insertId);
  }

  async update(
    id: number,
    reserva: ActualizarReservaDto,
  ): Promise<RespuestaReservaDto | undefined> {
    const fields = Object.entries(reserva).filter(
      ([, value]) => value !== undefined,
    ) as [keyof ActualizarReservaDto, number][];
    if (fields.length === 0) {
      return this.findById(id);
    }

    const columnMap: Record<string, string> = {
      idViaje: 'id_viaje',
      idUsuario: 'id_usuario',
      cantidadPasajes: 'cantidad_pasajes',
    };
    const values: (number | string)[] = fields.map(([, value]) => value);
    values.push(id);
    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE reservas SET ${fields
        .map(([field]) => `${columnMap[field]} = ?`)
        .join(', ')} WHERE id_reserva = ? AND activa = TRUE`,
      values,
    );
    return result.affectedRows ? this.findById(id) : undefined;
  }

  async logicalDelete(id: number): Promise<RespuestaReservaDto | undefined> {
    const reserva = await this.findById(id);
    if (!reserva) {
      return undefined;
    }

    await db.execute(
      'UPDATE reservas SET activa = FALSE WHERE id_reserva = ? AND activa = TRUE',
      [id],
    );
    return reserva;
  }

  async delete(id: number): Promise<RespuestaReservaDto | undefined> {
    const reserva = await this.findById(id);
    if (!reserva) {
      return undefined;
    }

    await db.execute('DELETE FROM reservas WHERE id_reserva = ?', [id]);
    return reserva;
  }
}