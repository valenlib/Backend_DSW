import db from "../../../shared/conn.mysql.js";
import AeropuertoService from "../Services/Aeropuerto.Service.js";
import RespuestaAeropuertoDto from "../dto/respuesta-aeropuerto.dto.js";
export default class AeropuertoServiceImpl extends AeropuertoService {
    toDto(row) {
        return new RespuestaAeropuertoDto(row.id_aeropuerto, row.nombre, row.ciudad, row.pais);
    }
    async findAll() {
        const [rows] = await db.query(`SELECT id_aeropuerto, nombre, ciudad, pais
       FROM aeropuertos WHERE activo = TRUE ORDER BY id_aeropuerto`);
        return rows.map((row) => this.toDto(row));
    }
    async findById(id) {
        const [rows] = await db.query(`SELECT id_aeropuerto, nombre, ciudad, pais
       FROM aeropuertos
       WHERE id_aeropuerto = ? AND activo = TRUE`, [id]);
        return rows[0] ? this.toDto(rows[0]) : undefined;
    }
    async create(aeropuerto) {
        const [result] = await db.execute(`INSERT INTO aeropuertos (nombre, ciudad, pais) VALUES (?, ?, ?)`, [aeropuerto.nombre, aeropuerto.ciudad, aeropuerto.pais]);
        return this.findById(result.insertId);
    }
    async update(id, aeropuerto) {
        const fields = Object.entries(aeropuerto).filter(([, value]) => value !== undefined);
        if (fields.length === 0) {
            return this.findById(id);
        }
        const values = fields.map(([, value]) => value.trim());
        values.push(String(id));
        const [result] = await db.execute(`UPDATE aeropuertos SET ${fields
            .map(([field]) => `${field} = ?`)
            .join(", ")}
       WHERE id_aeropuerto = ? AND activo = TRUE`, values);
        return result.affectedRows ? this.findById(id) : undefined;
    }
    async logicalDelete(id) {
        const aeropuerto = await this.findById(id);
        if (!aeropuerto) {
            return undefined;
        }
        await db.execute("UPDATE aeropuertos SET activo = FALSE WHERE id_aeropuerto = ? AND activo = TRUE", [id]);
        return aeropuerto;
    }
    async delete(id) {
        const aeropuerto = await this.findById(id);
        if (!aeropuerto) {
            return undefined;
        }
        await db.execute("DELETE FROM aeropuertos WHERE id_aeropuerto = ?", [id]);
        return aeropuerto;
    }
}
//# sourceMappingURL=Aeropuerto.Service.Impl.js.map