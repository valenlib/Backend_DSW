import AuthService from '../Services/Auth.Service';
import RespuestaLoginDto from '../dto/respuesta-login.dto';
import db from '../../../shared/conn.mysql';
export class AuthServiceImpl extends AuthService {
    async login(userRequest) {
        const [rows] = await db.query('SELECT id_usuario, nombre, apellido, email FROM usuarios WHERE email = ? AND password = ? LIMIT 1', [userRequest.email, userRequest.password]);
        const user = rows[0];
        return user
            ? new RespuestaLoginDto(user.id_usuario, user.nombre, user.apellido, user.email)
            : undefined;
    }
    async logout(userRequest) {
        return undefined;
    }
}
export default AuthServiceImpl;
//# sourceMappingURL=Auth.Service.Impl.js.map