import AdminService from '../Services/Admin.Service';
import RespuestaAdminDto from '../dto/respuesta-admin.dto';
import db from '../../../shared/conn.mysql';
export class AdminServiceImpl extends AdminService {
    async findAll() {
        const [rows] = await db.query('SELECT id_usuario, nombre, apellido, email FROM usuarios ORDER BY id_usuario');
        return rows.map((row) => new RespuestaAdminDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email));
    }
    async findById(id) {
        const [rows] = await db.query('SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE id_usuario = ?', [id]);
        const row = rows[0];
        return row
            ? new RespuestaAdminDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email)
            : undefined;
    }
    async findByCriterio(criterio) {
        const criterioBusqueda = `%${criterio}%`;
        const [rows] = await db.query(`SELECT id_usuario, nombre, apellido, email
       FROM usuarios
       WHERE nombre LIKE ? OR apellido LIKE ? OR email LIKE ?
       ORDER BY id_usuario`, [criterioBusqueda, criterioBusqueda, criterioBusqueda]);
        return rows.map((row) => new RespuestaAdminDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email));
    }
    async update(id, usuario) {
        return undefined;
    }
    async delete(id) {
        return undefined;
    }
}
export default AdminServiceImpl;
//# sourceMappingURL=Admin.Service.Impl.js.map