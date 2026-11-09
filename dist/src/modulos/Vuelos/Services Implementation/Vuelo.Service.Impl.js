import db from "../../../shared/conn.mysql.js";
import VueloService from "../Services/Vuelo.Service.js";
import RespuestaVueloDto from "../dto/respuesta-vuelo.dto.js";
export default class VueloServiceImpl extends VueloService {
    constructor() {
        super(...arguments);
        this.selectQuery = `
    SELECT v.id_vuelo, v.id_aeropuerto_origen, v.id_aeropuerto_destino,
           v.fecha_salida, v.fecha_llegada, v.precio, v.estado, v.nuevo_horario
    FROM vuelos v
    INNER JOIN aeropuertos ao
      ON ao.id_aeropuerto = v.id_aeropuerto_origen AND ao.activo = TRUE
    INNER JOIN aeropuertos ad
      ON ad.id_aeropuerto = v.id_aeropuerto_destino AND ad.activo = TRUE
  `;
    }
    toDto(row) {
        return new RespuestaVueloDto(row.id_vuelo, row.id_aeropuerto_origen, row.id_aeropuerto_destino, row.fecha_salida, row.fecha_llegada, Number(row.precio), row.estado, row.nuevo_horario);
    }
    async findAll() {
        const [rows] = await db.query(`${this.selectQuery}
       WHERE v.estado <> 'cancelado'
       ORDER BY v.fecha_salida, v.id_vuelo`);
        return rows.map((row) => this.toDto(row));
    }
    async findById(id) {
        const [rows] = await db.query(`${this.selectQuery}
       WHERE v.id_vuelo = ? AND v.estado <> 'cancelado'`, [id]);
        return rows[0] ? this.toDto(rows[0]) : undefined;
    }
    async findByIdIncludingCancelled(id) {
        const [rows] = await db.query(`${this.selectQuery} WHERE v.id_vuelo = ?`, [id]);
        return rows[0] ? this.toDto(rows[0]) : undefined;
    }
    async create(vuelo) {
        const [result] = await db.execute(`INSERT INTO vuelos
       (id_aeropuerto_origen, id_aeropuerto_destino, fecha_salida,
        fecha_llegada, precio, estado, nuevo_horario)
       VALUES (?, ?, ?, ?, ?, ?, ?)`, [
            vuelo.idAeropuertoOrigen,
            vuelo.idAeropuertoDestino,
            `${vuelo.fechaSalida} ${vuelo.horaSalida}`,
            `${vuelo.fechaLlegada} ${vuelo.horaLlegada}`,
            vuelo.precio,
            vuelo.estado,
            vuelo.nuevoHorario || null,
        ]);
        return this.findById(result.insertId);
    }
    async update(id, vuelo) {
        const fields = Object.entries(vuelo).filter(([, value]) => value !== undefined);
        if (fields.length === 0) {
            return this.findById(id);
        }
        const columnMap = {
            idAeropuertoOrigen: "id_aeropuerto_origen",
            idAeropuertoDestino: "id_aeropuerto_destino",
            fechaSalida: "fecha_salida",
            fechaLlegada: "fecha_llegada",
            precio: "precio",
            estado: "estado",
            nuevoHorario: "nuevo_horario",
        };
        const values = fields.map(([, value]) => value);
        values.push(id);
        const [result] = await db.execute(`UPDATE vuelos SET ${fields
            .map(([field]) => `${columnMap[field]} = ?`)
            .join(", ")}
       WHERE id_vuelo = ? AND estado <> 'cancelado'`, values);
        return result.affectedRows
            ? this.findByIdIncludingCancelled(id)
            : undefined;
    }
    async delete(id) {
        const vuelo = await this.findByIdIncludingCancelled(id);
        if (!vuelo) {
            return undefined;
        }
        await db.execute("DELETE FROM vuelos WHERE id_vuelo = ?", [id]);
        return vuelo;
    }
}
//# sourceMappingURL=Vuelo.Service.Impl.js.map