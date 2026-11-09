import AuthService from '../Services/Auth.Service';
import LoginUserDto from '../dto/login-user.dto';
import LogoutUserDto from '../dto/logout-user.dto';
import RespuestaLoginDto from '../dto/respuesta-login.dto';
import RespuestaLogoutDto from '../dto/respuesta-logout.dto';
export declare class AuthServiceImpl extends AuthService {
    login(userRequest: LoginUserDto): Promise<RespuestaLoginDto | undefined>;
    logout(userRequest: LogoutUserDto): Promise<RespuestaLogoutDto | undefined>;
    refresh(refreshToken: string): Promise<RespuestaLoginDto | undefined>;
}
export default AuthServiceImpl;
//# sourceMappingURL=Auth.Service.Impl.d.ts.map