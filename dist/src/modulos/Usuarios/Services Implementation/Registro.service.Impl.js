import bcrypt from 'bcrypt';
import db from '../../../shared/conn.mysql';
import RegistroService from '../Services/Registro.service';
import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
export class RegistroServiceImpl extends RegistroService {
    async registrarUsuario(usuario) {
        const passwordHash = await bcrypt.hash(usuario.password, 12);
        const [result] = await db.execute(`INSERT INTO usuarios (nombre, apellido, email, password)
       VALUES (?, ?, ?, ?)`, [usuario.nombre, usuario.apellido, usuario.email, passwordHash]);
        return new RespuestaRegistroDto(result.insertId, `${usuario.nombre} ${usuario.apellido}`, usuario.email);
    }
}
export default RegistroServiceImpl;
//# sourceMappingURL=Registro.service.Impl.js.map