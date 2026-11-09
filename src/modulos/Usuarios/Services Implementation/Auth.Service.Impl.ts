import AuthService from '../Services/Auth.Service';
import LoginUserDto from '../dto/login-user.dto';
import LogoutUserDto from '../dto/logout-user.dto';
import RespuestaLoginDto from '../dto/respuesta-login.dto';
import RespuestaLogoutDto from '../dto/respuesta-logout.dto';
import db from '../../../shared/conn.mysql';
import type { RowDataPacket } from 'mysql2';

export class AuthServiceImpl extends AuthService {
  async login(
    userRequest: LoginUserDto,
  ): Promise<RespuestaLoginDto | undefined> {
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT id_usuario, nombre, apellido, email, password FROM usuarios WHERE email = ? LIMIT 1',
      [userRequest.email.trim().toLowerCase()],
    );
    const user = rows[0];

    return user
      ? new RespuestaLoginDto(
          user.id_usuario,
          user.nombre,
          user.apellido,
          user.email,
        )
      : undefined;
  }

  async logout(
    userRequest: LogoutUserDto,
  ): Promise<RespuestaLogoutDto | undefined> {
    return undefined;
  }
}

export default AuthServiceImpl;