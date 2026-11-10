import PerfilService from "../Services/Perfil.Service.js";
import RespuestaPerfilDto from "../dto/respuesta-perfil.dto.js";
import db from "../../../shared/conn.mysql.js";
export class PerfilServiceImpl extends PerfilService {
    async findById(id) {
        const [rows] = await db.query("SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE id_usuario = ? AND activo = TRUE", [id]);
        const row = rows[0];
        return row
            ? new RespuestaPerfilDto(row.id_usuario, `${row.nombre} ${row.apellido}`, row.email)
            : undefined;
    }
    async actualizarPerfil(perfilRequest) {
        const fields = Object.entries(perfilRequest).filter(([field, value]) => field !== "id" && value !== undefined);
        if (fields.length === 0) {
            return this.findById(perfilRequest.id);
        }
        const values = fields.map(([, value]) => value.trim());
        values.push(String(perfilRequest.id));
        const columnMap = {
            nombre: "nombre",
            apellido: "apellido",
            email: "email",
        };
        const [result] = await db.execute(`UPDATE usuarios SET ${fields
            .map(([field]) => `${columnMap[field]} = ?`)
            .join(", ")}
       WHERE id_usuario = ? AND activo = TRUE`, values);
        return result.affectedRows
            ? this.findById(perfilRequest.id)
            : undefined;
    }
    async logicalDelete(perfilRequest) {
        const perfil = await this.findById(perfilRequest.id);
        if (!perfil) {
            return undefined;
        }
        await db.execute("UPDATE usuarios SET activo = FALSE WHERE id_usuario = ? AND activo = TRUE", [perfilRequest.id]);
        return perfil;
    }
    async delete(perfilRequest) {
        const perfil = await this.findById(perfilRequest.id);
        if (!perfil) {
            return undefined;
        }
        await db.execute("DELETE FROM usuarios WHERE id_usuario = ?", [
            perfilRequest.id,
        ]);
        return perfil;
    }
}
export default PerfilServiceImpl;
//# sourceMappingURL=Perfil.Service.Impl.js.map