import db from "../../../shared/conn.mysql.js";
import ReservaService from "../Services/Reserva.Service.js";
import RespuestaReservaDto from "../dto/respuesta-reserva.dto.js";
import { HttpError } from "../../../shared/error-handler.js";
export default class ReservaServiceImpl extends ReservaService {
    constructor() {
        super(...arguments);
        this.selectQuery = `     SELECT r.id_reserva, r.id_vuelo, r.cantidad_pasajes,            u.nombre, u.apellido, u.email,            v.precio * r.cantidad_pasajes AS precio_total     FROM reservas r     INNER JOIN usuarios u ON u.id_usuario = r.id_usuario AND u.activo = TRUE     INNER JOIN vuelos v ON v.id_vuelo = r.id_vuelo   `;
    }
    toDto(row) {
        return new RespuestaReservaDto(row.id_reserva, row.id_vuelo, `${row.nombre} ${row.apellido}`, row.email, row.cantidad_pasajes, Number(row.precio_total));
    }
    async findAll(userId, role) {
        const ownerFilter = role === "admin" ? "" : " AND r.id_usuario = ?";
        const params = role === "admin" ? [] : [userId];
        const [rows] = await db.query(`${this.selectQuery} WHERE r.activa = TRUE${ownerFilter} ORDER BY r.id_reserva`, params);
        return rows.map((row) => this.toDto(row));
    }
    async findById(id, userId, role) {
        const ownerFilter = role === "admin" ? "" : " AND r.id_usuario = ?";
        const params = role === "admin" ? [id] : [id, userId];
        const [rows] = await db.query(`${this.selectQuery} WHERE r.id_reserva = ? AND r.activa = TRUE${ownerFilter}`, params);
        return rows[0] ? this.toDto(rows[0]) : undefined;
    }
    async findByEmail(email) {
        const [rows] = await db.query(`${this.selectQuery} WHERE u.email = ? AND r.activa = TRUE`, [email]);
        return rows.length > 0 ? rows.map((row) => this.toDto(row)) : undefined;
    }
    async create(reserva, userId, role) {
        const ownerId = role === "admin" ? reserva.idUsuario : userId;
        const [result] = await db.execute(`INSERT INTO reservas        (id_vuelo, id_usuario, estado, cantidad_pasajes)        VALUES (?, ?, 'pendiente', ?)`, [reserva.idVuelo, ownerId, reserva.cantidadPasajes]);
        return this.findById(result.insertId, userId, role);
    }
    async update(id, reserva, userId, role) {
        const fields = Object.entries(reserva).filter(([, value]) => value !== undefined);
        if (role !== "admin" && fields.some(([field]) => field === "idUsuario")) {
            throw new HttpError("No puede cambiar el propietario de una reserva", 403);
        }
        if (fields.length === 0) {
            return this.findById(id, userId, role);
        }
        const columnMap = {
            idVuelo: "id_vuelo",
            idUsuario: "id_usuario",
            cantidadPasajes: "cantidad_pasajes",
        };
        const values = fields.map(([, value]) => value);
        values.push(id);
        const ownerFilter = role === "admin" ? "" : " AND id_usuario = ?";
        if (role !== "admin") {
            values.push(userId);
        }
        const [result] = await db.execute(`UPDATE reservas SET ${fields.map(([field]) => `${columnMap[field]} = ?`).join(", ")} WHERE id_reserva = ? AND activa = TRUE${ownerFilter}`, values);
        return result.affectedRows ? this.findById(id, userId, role) : undefined;
    }
    async logicalDelete(id, userId, role) {
        const reserva = await this.findById(id, userId, role);
        if (!reserva) {
            return undefined;
        }
        await db.execute(`UPDATE reservas SET activa = FALSE        WHERE id_reserva = ? AND activa = TRUE${role === "admin" ? "" : " AND id_usuario = ?"}`, role === "admin" ? [id] : [id, userId]);
        return reserva;
    }
    async delete(id) {
        const [rows] = await db.query(`${this.selectQuery} WHERE r.id_reserva = ? AND r.activa = TRUE`, [id]);
        const reserva = rows[0] ? this.toDto(rows[0]) : undefined;
        if (!reserva) {
            return undefined;
        }
        await db.execute("DELETE FROM reservas WHERE id_reserva = ?", [id]);
        return reserva;
    }
}
//# sourceMappingURL=Reserva.Service.Impl.js.map