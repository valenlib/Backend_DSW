import AdminService, { UsuarioUpdate } from "../Services/Admin.Service.js";
import RespuestaAdminDto from "../dto/respuesta-admin.dto.js";
import db from "../../../shared/conn.mysql.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
export class AdminServiceImpl extends AdminService {
  async findAll(): Promise<RespuestaAdminDto[]> {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT id_usuario, nombre, apellido, email, rol FROM usuarios WHERE activo = TRUE ORDER BY id_usuario",
    );
    return rows.map(
      (row) =>
        new RespuestaAdminDto(
          row.id_usuario,
          row.nombre,
          row.apellido,
          row.email,
          row.rol,
        ),
    );
  }
  async findById(id: number): Promise<RespuestaAdminDto | undefined> {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT id_usuario, nombre, apellido, email, rol FROM usuarios WHERE id_usuario = ? AND activo = TRUE",
      [id],
    );
    const row = rows[0];
    return row
      ? new RespuestaAdminDto(
          row.id_usuario,
          row.nombre,
          row.apellido,
          row.email,
          row.rol,
        )
      : undefined;
  }
  async findByCriterio(criterio: string): Promise<RespuestaAdminDto[]> {
    const criterioBusqueda = `%${criterio}%`;
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT id_usuario, nombre, apellido, email, rol        FROM usuarios        WHERE activo = TRUE          AND (nombre LIKE ? OR apellido LIKE ? OR email LIKE ?)        ORDER BY id_usuario`,
      [criterioBusqueda, criterioBusqueda, criterioBusqueda],
    );
    return rows.map(
      (row) =>
        new RespuestaAdminDto(
          row.id_usuario,
          row.nombre,
          row.apellido,
          row.email,
          row.rol,
        ),
    );
  }
  async update(
    id: number,
    usuario: UsuarioUpdate,
  ): Promise<RespuestaAdminDto | undefined> {
    const fields = Object.entries(usuario).filter(
      ([, value]) => value !== undefined,
    ) as [keyof UsuarioUpdate, string][];
    if (fields.length === 0) {
      return this.findById(id);
    }
    const columnMap: Record<keyof UsuarioUpdate, string> = {
      nombre: "nombre",
      apellido: "apellido",
      email: "email",
      rol: "rol",
    };
    const values: (string | number)[] = fields.map(([, value]) =>
      typeof value === "string" ? value.trim() : value,
    );
    values.push(id);
    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE usuarios SET ${fields.map(([field]) => `${columnMap[field]} = ?`).join(", ")} WHERE id_usuario = ? AND activo = TRUE`,
      values,
    );
    if (!result.affectedRows) {
      return this.findById(id);
    }
    return this.findById(id);
  }
  async logicalDelete(id: number): Promise<RespuestaAdminDto | undefined> {
    const usuario = await this.findById(id);
    if (!usuario) {
      return undefined;
    }
    await db.execute(
      "UPDATE usuarios SET activo = FALSE WHERE id_usuario = ? AND activo = TRUE",
      [id],
    );
    return usuario;
  }
  async delete(id: number): Promise<RespuestaAdminDto | undefined> {
    const usuario = await this.findById(id);
    if (!usuario) {
      return undefined;
    }

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      await connection.execute(
        `DELETE p FROM pasajes p
         INNER JOIN reservas r ON r.id_reserva = p.id_reserva
         WHERE r.id_usuario = ?`,
        [id],
      );
      await connection.execute(
        "DELETE FROM reservas WHERE id_usuario = ?",
        [id],
      );
      await connection.execute(
        "DELETE FROM refresh_tokens WHERE id_usuario = ?",
        [id],
      );
      await connection.execute(
        "DELETE FROM usuarios WHERE id_usuario = ?",
        [id],
      );
      await connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }

    return usuario;
  }
}
export default AdminServiceImpl;
