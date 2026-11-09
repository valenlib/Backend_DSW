import AdminService from '../Services/Admin.Service';
import RespuestaAdminDto from '../dto/respuesta-admin.dto';
import db from '../../../shared/conn.mysql';
export class AdminServiceImpl extends AdminService {
    async findAll() {
        const [rows] = await db.query('SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE activo = TRUE ORDER BY id_usuario');
        return rows.map((row) => new RespuestaAdminDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email));
    }
    async findById(id) {
        const [rows] = await db.query('SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE id_usuario = ? AND activo = TRUE', [id]);
        const row = rows[0];
        return row
            ? new RespuestaAdminDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email)
            : undefined;
    }
    async findByCriterio(criterio) {
        const criterioBusqueda = `%${criterio}%`;
        const [rows] = await db.query(`SELECT id_usuario, nombre, apellido, email
       FROM usuarios
       WHERE activo = TRUE
         AND (nombre LIKE ? OR apellido LIKE ? OR email LIKE ?)
       ORDER BY id_usuario`, [criterioBusqueda, criterioBusqueda, criterioBusqueda]);
        return rows.map((row) => new RespuestaAdminDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email));
    }
    async update(id, usuario) {
        const fields = Object.entries(usuario).filter(([, value]) => value !== undefined);
        if (fields.length === 0) {
            return this.findById(id);
        }
        const values = fields.map(([, value]) => value);
        values.push(id);
        const [result] = await db.execute(`UPDATE usuarios SET ${fields
            .map(([field]) => `${field} = ?`)
            .join(', ')} WHERE id_usuario = ? AND activo = TRUE`, values);
        if (!result.affectedRows) {
            return undefined;
        }
        return this.findById(id);
    }
    async logicalDelete(id) {
        const usuario = await this.findById(id);
        if (!usuario) {
            return undefined;
        }
        await db.execute('UPDATE usuarios SET activo = FALSE WHERE id_usuario = ? AND activo = TRUE', [id]);
        return usuario;
    }
    async delete(id) {
        const usuario = await this.findById(id);
        if (!usuario) {
            return undefined;
        }
        await db.execute('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
        return usuario;
    }
}
export default AdminServiceImpl;
//# sourceMappingURL=Admin.Service.Impl.js.map