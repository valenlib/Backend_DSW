import AdminService from '../Services/Admin.Service';
import RespuestaAdminDto from '../dto/respuesta-admin.dto';
import Usuario from '../Entity/Usuario.entity';
import db from '../../../shared/conn.mysql';
import type { ResultSetHeader, RowDataPacket } from 'mysql2';

export class AdminServiceImpl extends AdminService {
  async findAll(): Promise<RespuestaAdminDto[]> {
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT id_usuario, nombre, apellido, email FROM usuarios ORDER BY id_usuario',
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
      'SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE id_usuario = ?',
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

  async findByCriterio(
    criterio: string,
  ): Promise<RespuestaAdminDto[]> {
    const criterioBusqueda = `%${criterio}%`;
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT id_usuario, nombre, apellido, email
       FROM usuarios
       WHERE nombre LIKE ? OR apellido LIKE ? OR email LIKE ?
       ORDER BY id_usuario`,
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
    usuario: Usuario,
  ): Promise<RespuestaAdminDto | undefined> {
    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE usuarios
       SET nombre = ?, apellido = ?, email = ?
       WHERE id_usuario = ?`,
      [
        usuario.getNombre().trim(),
        usuario.getApellido().trim(),
        usuario.getEmail().trim().toLowerCase(),
        id,
      ],
    );

    if (!result.affectedRows) {
      return undefined;
    }

    return this.findById(id);
  }

  async delete(id: number): Promise<RespuestaAdminDto | undefined> {
    const usuario = await this.findById(id);
    if (!usuario) {
      return undefined;
    }

    await db.execute('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
    return usuario;
  }
}

export default AdminServiceImpl;