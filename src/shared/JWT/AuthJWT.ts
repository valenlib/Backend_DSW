import jwt, { JwtPayload } from 'jsonwebtoken';
import { HttpError } from '../error-handler';

export type UserRole = 'admin' | 'usuario';

export interface AuthPayload extends JwtPayload {
  id: number;
  email: string;
  rol: UserRole;
  type: 'access' | 'refresh';
}

function getSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new HttpError('La configuración JWT_SECRET no está definida', 500);
  }
  return secret;
}

export function generarToken(
  payload: Omit<AuthPayload, 'iat' | 'exp'>,
  expiresIn: string = process.env.JWT_EXPIRES_IN ?? '15m',
): string {
  return jwt.sign(payload, getSecret(), { expiresIn } as jwt.SignOptions);
}

export function validarToken(
  token: string,
  expectedType: AuthPayload['type'] = 'access',
): AuthPayload | null {
  try {
    const payload = jwt.verify(token, getSecret());
    if (
      typeof payload === 'string' ||
      typeof payload.id !== 'number' ||
      typeof payload.email !== 'string' ||
      (payload.rol !== 'admin' && payload.rol !== 'usuario') ||
      payload.type !== expectedType
    ) {
      return null;
    }
    return payload as AuthPayload;
  } catch {
    return null;
  }
}

export function obtenerExpiracionToken(token: string): Date {
  const payload = jwt.decode(token);
  if (
    typeof payload !== 'object' ||
    payload === null ||
    typeof payload.exp !== 'number'
  ) {
    throw new HttpError('El token no contiene una expiración válida', 500);
  }
  return new Date(payload.exp * 1000);
}
