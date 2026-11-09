import bcrypt from "bcrypt";
import type { ResultSetHeader } from "mysql2";
import db from "../../../shared/conn.mysql.js";
import RegistroService from "../Services/Registro.service.js";
import RespuestaRegistroDto from "../dto/respuesta-registro.dto.js";
import CrearUsuarioDto from "../dto/crear-usuario.dto.js";

export class RegistroServiceImpl extends RegistroService {
  async registrarUsuario(
    usuario: CrearUsuarioDto,
  ): Promise<RespuestaRegistroDto | undefined> {
    const passwordHash = await bcrypt.hash(usuario.password, 12);
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO usuarios (nombre, apellido, email, password)
       VALUES (?, ?, ?, ?)`,
      [usuario.nombre, usuario.apellido, usuario.email, passwordHash],
    );

    return new RespuestaRegistroDto(
      result.insertId,
      `${usuario.nombre} ${usuario.apellido}`,
      usuario.email,
    );
  }
}

export default RegistroServiceImpl;
