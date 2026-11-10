import db from "../../../shared/conn.mysql.js";
import PasajeService from "../Services/Pasaje.Service.js";
import RespuestaPasajeDto from "../dto/respuesta-pasaje.dto.js";
export default class PasajeServiceImpl extends PasajeService {
    toDto(row) {
        return new RespuestaPasajeDto(row.id_pasaje, row.id_reserva, row.id_vuelo, Number(row.precio), row.fecha, row.hora);
    }
    async findById(id) {
        const [rows] = await db.query("SELECT id_pasaje, id_reserva, id_vuelo, precio, fecha, hora FROM pasajes WHERE id_pasaje = ?", [id]);
        return rows[0] ? this.toDto(rows[0]) : undefined;
    }
    async create(pasaje) {
        const [result] = await db.execute(`INSERT INTO pasajes (id_reserva, id_vuelo, precio, fecha, hora)
       VALUES (?, ?, ?, ?, ?)`, [
            pasaje.idReserva,
            pasaje.idVuelo,
            pasaje.precio,
            pasaje.fecha,
            pasaje.hora,
        ]);
        return this.findById(result.insertId);
    }
    async update(id, pasaje) {
        const fields = Object.entries(pasaje).filter(([, value]) => value !== undefined);
        if (fields.length === 0) {
            return this.findById(id);
        }
        const columnMap = {
            idReserva: "id_reserva",
            idVuelo: "id_vuelo",
            precio: "precio",
            fecha: "fecha",
            hora: "hora",
        };
        const values = fields.map(([, value]) => value);
        values.push(id);
        const [result] = await db.execute(`UPDATE pasajes SET ${fields
            .map(([field]) => `${columnMap[field]} = ?`)
            .join(", ")}
       WHERE id_pasaje = ?`, values);
        return result.affectedRows ? this.findById(id) : undefined;
    }
    async delete(id) {
        const pasaje = await this.findById(id);
        if (!pasaje) {
            return undefined;
        }
        await db.execute("DELETE FROM pasajes WHERE id_pasaje = ?", [id]);
        return pasaje;
    }
}
//# sourceMappingURL=Pasaje.Service.Impl.js.map