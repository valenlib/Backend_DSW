import AdminService, { UsuarioUpdate } from "../Services/Admin.Service.js";
import RespuestaAdminDto from "../dto/respuesta-admin.dto.js";
import db from "../../../shared/conn.mysql.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
export class AdminServiceImpl extends AdminService {
  async findAll(): Promise<RespuestaAdminDto[]> {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE activo = TRUE ORDER BY id_usuario",
    );
    return rows.map(
      (row) =>
        new RespuestaAdminDto(
          row.id_usuario,
          `${row.nombre} ${row.apellido}`,
          row.email,
        ),
    );
  }
  async findById(id: number): Promise<RespuestaAdminDto | undefined> {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE id_usuario = ? AND activo = TRUE",
      [id],
    );
    const row = rows[0];
    return row
      ? new RespuestaAdminDto(
          row.id_usuario,
          `${row.nombre} ${row.apellido}`,
          row.email,
        )
      : undefined;
  }
  async findByCriterio(criterio: string): Promise<RespuestaAdminDto[]> {
    const criterioBusqueda = `%${criterio}%`;
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT id_usuario, nombre, apellido, email        FROM usuarios        WHERE activo = TRUE          AND (nombre LIKE ? OR apellido LIKE ? OR email LIKE ?)        ORDER BY id_usuario`,
      [criterioBusqueda, criterioBusqueda, criterioBusqueda],
    );
    return rows.map(
      (row) =>
        new RespuestaAdminDto(
          row.id_usuario,
          `${row.nombre} ${row.apellido}`,
          row.email,
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
    const values: (string | number)[] = fields.map(([, value]) => value);
    values.push(id);
    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE usuarios SET ${fields.map(([field]) => `${field} = ?`).join(", ")} WHERE id_usuario = ? AND activo = TRUE`,
      values,
    );
    if (!result.affectedRows) {
      return undefined;
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
    await db.execute("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
    return usuario;
  }
}
export default AdminServiceImpl;
