import LoginUserDto from "../dto/login-user.dto.js";
import LogoutUserDto from "../dto/logout-user.dto.js";
import RespuestaLoginDto from "../dto/respuesta-login.dto.js";
import RespuestaLogoutDto from "../dto/respuesta-logout.dto.js";
export abstract class AuthService {
  abstract login(
    userRequest: LoginUserDto,
  ): Promise<RespuestaLoginDto | undefined>;
  abstract logout(
    userRequest: LogoutUserDto,
  ): Promise<RespuestaLogoutDto | undefined>;
  abstract refresh(
    refreshToken: string,
  ): Promise<RespuestaLoginDto | undefined>;
}
export default AuthService;
