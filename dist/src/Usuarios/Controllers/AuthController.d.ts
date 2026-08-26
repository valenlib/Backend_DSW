import { AuthService } from './auth.service';
import { RespuestaLoginDto } from './dto/respuesta-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userRequest: loginUserDto): Promise<RespuestaLoginDto>;
    logout(userRequest: logoutUserDto): Promise<RespuestaLoginDto>;
}
//# sourceMappingURL=AuthController.d.ts.map