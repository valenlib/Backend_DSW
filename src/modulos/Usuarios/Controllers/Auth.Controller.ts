import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { LogoutUserDto } from './dto/logout-user.dto';
import { RespuestaLoginDto } from './dto/respuesta-login.dto';
import { RespuestaLogoutDto } from './dto/respuesta-logout.dto';
import { ApiResponse } from '../common/api-response';

@Controller('auth')
export class AuthController {

 
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body () userRequest : loginUserDto, ): Promise<RespuestaLoginDto> {
    const response = await this.authService.login(UserRequest);
    return ApiResponse.success('Login exitoso',response);
  }
  @Post('logout')
  async logout(@Body() userRequest : logoutUserDto, ): Promise<RespuestaLoginDto> {
    const response = await this.authService.logout(userRequest);
    return ApiResponse.success('Logout exitoso',response);
  }
}
