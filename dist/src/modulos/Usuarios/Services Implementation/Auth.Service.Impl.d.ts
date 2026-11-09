import AuthService from "../Services/Auth.Service.js";
import LoginUserDto from "../dto/login-user.dto.js";
import LogoutUserDto from "../dto/logout-user.dto.js";
import RespuestaLoginDto from "../dto/respuesta-login.dto.js";
import RespuestaLogoutDto from "../dto/respuesta-logout.dto.js";
export declare class AuthServiceImpl extends AuthService {
    login(userRequest: LoginUserDto): Promise<RespuestaLoginDto | undefined>;
    logout(userRequest: LogoutUserDto): Promise<RespuestaLogoutDto | undefined>;
    refresh(refreshToken: string): Promise<RespuestaLoginDto | undefined>;
}
export default AuthServiceImpl;
//# sourceMappingURL=Auth.Service.Impl.d.ts.map