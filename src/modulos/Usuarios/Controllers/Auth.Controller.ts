import { Request, Response } from 'express';
import AuthService from '../Services/Auth.Service';
import LoginUserDto from '../dto/login-user.dto';
import LogoutUserDto from '../dto/logout-user.dto';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response): Promise<void> {
    const response = await this.authService.login(req.body as LoginUserDto);

    if (!response) {
      res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      return;
    }

    res.json(response);
  }

  async logout(req: Request, res: Response): Promise<void> {
    const response = await this.authService.logout(req.body as LogoutUserDto);
    res.json(response);
  }
}
