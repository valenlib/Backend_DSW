import AuthService from '../Services/Auth.Service';
import LoginUserDto from '../dto/login-user.dto';
import LogoutUserDto from '../dto/logout-user.dto';
import RespuestaLoginDto from '../dto/respuesta-login.dto';
import RespuestaLogoutDto from '../dto/respuesta-logout.dto';

export class AuthServiceImpl extends AuthService {
  async login(
    userRequest: LoginUserDto,
  ): Promise<RespuestaLoginDto | undefined> {
    return undefined;
  }

  async logout(
    userRequest: LogoutUserDto,
  ): Promise<RespuestaLogoutDto | undefined> {
    return undefined;
  }
}

export default AuthServiceImpl;