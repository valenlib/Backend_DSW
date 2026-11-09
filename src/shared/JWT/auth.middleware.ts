import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../error-handler.js";
import { validarToken, AuthPayload, UserRole } from "./AuthJWT.js";

declare global {
  namespace Express {
    interface Request {
      auth?: AuthPayload;
    }
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authorization = req.headers.authorization;
  const [scheme, token] = authorization?.split(" ") ?? [];
  const payload = scheme === "Bearer" && token ? validarToken(token) : null;

  if (!payload) {
    next(new HttpError("Debe enviar un token de acceso válido", 401));
    return;
  }

  req.auth = payload;
  next();
}

export function requireRole(...roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.auth || !roles.includes(req.auth.rol)) {
      next(
        new HttpError("No tiene permisos para realizar esta operación", 403),
      );
      return;
    }
    next();
  };
}

export function requireSelfOrRole(...roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const requestedId = Number(req.params.id);
    if (
      req.auth &&
      (roles.includes(req.auth.rol) || req.auth.id === requestedId)
    ) {
      next();
      return;
    }
    next(new HttpError("No tiene permisos para acceder a este recurso", 403));
  };
}
