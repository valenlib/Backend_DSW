import AdminService from "../Services/Admin.Service.js";
import RespuestaAdminDto from "../dto/respuesta-admin.dto.js";
import db from "../../../shared/conn.mysql.js";
export class AdminServiceImpl extends AdminService {
    async findAll() {
        const [rows] = await db.query("SELECT id_usuario, nombre, apellido, email, rol FROM usuarios WHERE activo = TRUE ORDER BY id_usuario");
        return rows.map((row) => new RespuestaAdminDto(row.id_usuario, row.nombre, row.apellido, row.email, row.rol));
    }
    async findById(id) {
        const [rows] = await db.query("SELECT id_usuario, nombre, apellido, email, rol FROM usuarios WHERE id_usuario = ? AND activo = TRUE", [id]);
        const row = rows[0];
        return row
            ? new RespuestaAdminDto(row.id_usuario, row.nombre, row.apellido, row.email, row.rol)
            : undefined;
    }
    async findByCriterio(criterio) {
        const criterioBusqueda = `%${criterio}%`;
        const [rows] = await db.query(`SELECT id_usuario, nombre, apellido, email, rol        FROM usuarios        WHERE activo = TRUE          AND (nombre LIKE ? OR apellido LIKE ? OR email LIKE ?)        ORDER BY id_usuario`, [criterioBusqueda, criterioBusqueda, criterioBusqueda]);
        return rows.map((row) => new RespuestaAdminDto(row.id_usuario, row.nombre, row.apellido, row.email, row.rol));
    }
    async update(id, usuario) {
        const fields = Object.entries(usuario).filter(([, value]) => value !== undefined);
        if (fields.length === 0) {
            return this.findById(id);
        }
        const columnMap = {
            nombre: "nombre",
            apellido: "apellido",
            email: "email",
            rol: "rol",
        };
        const values = fields.map(([, value]) => typeof value === "string" ? value.trim() : value);
        values.push(id);
        const [result] = await db.execute(`UPDATE usuarios SET ${fields.map(([field]) => `${columnMap[field]} = ?`).join(", ")} WHERE id_usuario = ? AND activo = TRUE`, values);
        if (!result.affectedRows) {
            return this.findById(id);
        }
        return this.findById(id);
    }
    async logicalDelete(id) {
        const usuario = await this.findById(id);
        if (!usuario) {
            return undefined;
        }
        await db.execute("UPDATE usuarios SET activo = FALSE WHERE id_usuario = ? AND activo = TRUE", [id]);
        return usuario;
    }
    async delete(id) {
        const usuario = await this.findById(id);
        if (!usuario) {
            return undefined;
        }
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();
            await connection.execute(`DELETE p FROM pasajes p
         INNER JOIN reservas r ON r.id_reserva = p.id_reserva
         WHERE r.id_usuario = ?`, [id]);
            await connection.execute("DELETE FROM reservas WHERE id_usuario = ?", [id]);
            await connection.execute("DELETE FROM refresh_tokens WHERE id_usuario = ?", [id]);
            await connection.execute("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
            await connection.commit();
        }
        catch (error) {
            await connection.rollback();
            throw error;
        }
        finally {
            connection.release();
        }
        return usuario;
    }
}
export default AdminServiceImpl;
//# sourceMappingURL=Admin.Service.Impl.js.map