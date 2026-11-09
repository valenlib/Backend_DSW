import type { NextFunction, Request, Response } from 'express';
import type { RowDataPacket } from 'mysql2';
import db from '../conn.mysql';
import { HttpError } from '../error-handler';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordMinimumLength = 8;
const allowedCreateFields = new Set(['nombre', 'apellido', 'email', 'password']);
const allowedUpdateFields = new Set(['nombre', 'apellido', 'email']);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateEmail(email: string): void {
  if (!emailPattern.test(email)) {
    throw new HttpError('El email no tiene un formato válido', 400);
  }
}

function validatePassword(password: string, requireComplexity = true): void {
  if (password.length < passwordMinimumLength) {
    throw new HttpError(
      `La contraseña debe tener al menos ${passwordMinimumLength} caracteres`,
      400,
    );
  }
  if (requireComplexity && (!/[a-z]/.test(password) || !/[A-Z]/.test(password) ||
      !/\d/.test(password) || !/[^A-Za-z\d]/.test(password))) {
    throw new HttpError(
      'La contraseña debe incluir minúsculas, mayúsculas, números y símbolos',
      400,
    );
  }
}

function validateAllowedFields(body: unknown, allowedFields: Set<string>): void {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    throw new HttpError('El body debe ser un objeto', 400);
  }
  const extraFields = Object.keys(body).filter((field) => !allowedFields.has(field));
  if (extraFields.length > 0) {
    throw new HttpError(`Propiedades no permitidas: ${extraFields.join(', ')}`, 400);
  }
}

export async function validateCreateUser(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    validateAllowedFields(req.body, allowedCreateFields);
    const { nombre, apellido, email, password } = req.body ?? {};

    if (
      !isNonEmptyString(nombre) ||
      !isNonEmptyString(apellido) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(password)
    ) {
      throw new HttpError(
        'nombre, apellido, email y password son obligatorios',
        400,
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    validateEmail(normalizedEmail);
    validatePassword(password, false);

    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT id_usuario FROM usuarios WHERE email = ? AND activo = TRUE LIMIT 1',
      [normalizedEmail],
    );
    if (rows.length > 0) {
      throw new HttpError('El email ya está registrado', 409);
    }

    req.body = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      email: normalizedEmail,
      password,
    };
    next();
  } catch (error) {
    next(error);
  }
}

export function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    validateAllowedFields(req.body, new Set(['email', 'password']));
    const { email, password } = req.body ?? {};
    if (!isNonEmptyString(email) || !isNonEmptyString(password)) {
      throw new HttpError('email y password son obligatorios', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();
    validateEmail(normalizedEmail);
    validatePassword(password);
    req.body = { email: normalizedEmail, password };
    next();
  } catch (error) {
    next(error);
  }
}

export async function validateUserUpdate(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    validateId(req);
    validateAllowedFields(req.body, allowedUpdateFields);
    const { nombre, apellido, email } = req.body ?? {};
    const fields = { nombre, apellido, email };

    if (!Object.values(fields).some((value) => value !== undefined)) {
      throw new HttpError('Debe enviar al menos un campo para actualizar', 400);
    }

    if (nombre !== undefined && !isNonEmptyString(nombre)) {
      throw new HttpError('El nombre no puede estar vacío', 400);
    }
    if (apellido !== undefined && !isNonEmptyString(apellido)) {
      throw new HttpError('El apellido no puede estar vacío', 400);
    }

    let normalizedEmail: string | undefined;
    if (email !== undefined) {
      if (!isNonEmptyString(email)) {
        throw new HttpError('El email no puede estar vacío', 400);
      }
      normalizedEmail = email.trim().toLowerCase();
      validateEmail(normalizedEmail);

      const [rows] = await db.query<RowDataPacket[]>(
        'SELECT id_usuario FROM usuarios WHERE email = ? AND id_usuario <> ? AND activo = TRUE LIMIT 1',
        [normalizedEmail, req.params.id],
      );
      if (rows.length > 0) {
        throw new HttpError('El email ya está registrado', 409);
      }
    }

    req.body = {
      ...(nombre !== undefined ? { nombre: nombre.trim() } : {}),
      ...(apellido !== undefined ? { apellido: apellido.trim() } : {}),
      ...(normalizedEmail !== undefined ? { email: normalizedEmail } : {}),
    };
    next();
  } catch (error) {
    next(error);
  }
}

export function validateId(
  req: Request,
  res?: Response,
  next?: NextFunction,
): void {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    throw new HttpError('El ID debe ser un número entero positivo', 400);
  }

  if (next) {
    next();
  }
}

export function validateSearchCriteria(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!isNonEmptyString(req.params.criterio)) {
    next(new HttpError('El criterio de búsqueda es obligatorio', 400));
    return;
  }
  req.params.criterio = req.params.criterio.trim();
  next();
}
