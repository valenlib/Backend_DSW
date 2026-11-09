import type { NextFunction, Request, Response } from 'express';
import { HttpError } from '../error-handler';

function positiveInteger(value: unknown): value is number {
  return Number.isInteger(value) && Number(value) > 0;
}

export function validateReservaBody(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { idViaje, idUsuario, cantidadPasajes } = req.body ?? {};
  if (
    !positiveInteger(idViaje) ||
    !positiveInteger(idUsuario) ||
    !positiveInteger(cantidadPasajes)
  ) {
    next(
      new HttpError(
        'idViaje, idUsuario y cantidadPasajes deben ser enteros positivos',
        400,
      ),
    );
    return;
  }
  next();
}

export function validateReservaUpdate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { idViaje, idUsuario, cantidadPasajes } = req.body ?? {};
  const values = [idViaje, idUsuario, cantidadPasajes].filter(
    (value) => value !== undefined,
  );
  if (
    values.length === 0 ||
    values.some((value) => !positiveInteger(value))
  ) {
    next(new HttpError('Debe enviar campos válidos para actualizar', 400));
    return;
  }
  next();
}
