import LoginUserDto from '../dto/login-user.dto';
import LogoutUserDto from '../dto/logout-user.dto';
import RespuestaLoginDto from '../dto/respuesta-login.dto';
import RespuestaLogoutDto from '../dto/respuesta-logout.dto';

export abstract class AuthService {
  abstract login(
    userRequest: LoginUserDto,
  ): Promise<RespuestaLoginDto | undefined>;

  abstract logout(
    userRequest: LogoutUserDto,
  ): Promise<RespuestaLogoutDto | undefined>;
}

export default AuthService;