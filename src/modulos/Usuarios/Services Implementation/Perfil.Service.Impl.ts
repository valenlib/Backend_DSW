import PerfilService from "../Services/Perfil.Service.js";
import ActualizarPerfilDto from "../dto/actualizar-perfil.dto.js";
import DeletePerfilDto from "../dto/delete-perfil.dto.js";
import LogicalDeletePerfilDto from "../dto/logical-delete-perfil.dto.js";
import RespuestaPerfilDto from "../dto/respuesta-perfil.dto.js";
import db from "../../../shared/conn.mysql.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

type PerfilRow = RowDataPacket & {
  id_usuario: number;
  nombre: string;
  apellido: string;
  email: string;
};

export class PerfilServiceImpl extends PerfilService {
  private async findById(id: number): Promise<RespuestaPerfilDto | undefined> {
    const [rows] = await db.query<PerfilRow[]>(
      "SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE id_usuario = ? AND activo = TRUE",
      [id],
    );
    const row = rows[0];
    return row
      ? new RespuestaPerfilDto(
          row.id_usuario,
          `${row.nombre} ${row.apellido}`,
          row.email,
        )
      : undefined;
  }

  async actualizarPerfil(
    perfilRequest: ActualizarPerfilDto,
  ): Promise<RespuestaPerfilDto | undefined> {
    const fields = Object.entries(perfilRequest).filter(
      ([field, value]) => field !== "id" && value !== undefined,
    ) as [keyof Omit<ActualizarPerfilDto, "id">, string][];

    if (fields.length === 0) {
      return this.findById(perfilRequest.id);
    }

    const values: string[] = fields.map(([, value]) => value.trim());
    values.push(String(perfilRequest.id));
    const columnMap: Record<
      keyof Omit<ActualizarPerfilDto, "id">,
      string
    > = {
      nombre: "nombre",
      apellido: "apellido",
      email: "email",
    };

    const [result] = await db.execute<ResultSetHeader>(
      `UPDATE usuarios SET ${fields
        .map(([field]) => `${columnMap[field]} = ?`)
        .join(", ")}
       WHERE id_usuario = ? AND activo = TRUE`,
      values,
    );
    return result.affectedRows
      ? this.findById(perfilRequest.id)
      : undefined;
  }

  async logicalDelete(
    perfilRequest: LogicalDeletePerfilDto,
  ): Promise<RespuestaPerfilDto | undefined> {
    const perfil = await this.findById(perfilRequest.id);
    if (!perfil) {
      return undefined;
    }

    await db.execute(
      "UPDATE usuarios SET activo = FALSE WHERE id_usuario = ? AND activo = TRUE",
      [perfilRequest.id],
    );
    return perfil;
  }

  async delete(
    perfilRequest: DeletePerfilDto,
  ): Promise<RespuestaPerfilDto | undefined> {
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
