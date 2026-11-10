import type { NextFunction, Request, Response } from "express";
import type { RowDataPacket } from "mysql2";
import db from "../conn.mysql.js";
import { HttpError } from "../error-handler.js";

export const estadosVuelo = ["en hora", "cancelado", "demorado"] as const;
type EstadoVuelo = (typeof estadosVuelo)[number];

const dateTimePattern = /^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2})?)?$/;
const timePattern = /^([01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/;

function bodyObject(body: unknown): Record<string, unknown> {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    throw new HttpError("El body debe ser un objeto", 400);
  }
  return body as Record<string, unknown>;
}

function positiveInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value > 0;
}

function validDateTime(value: unknown): value is string {
  return (
    typeof value === "string" &&
    dateTimePattern.test(value) &&
    !Number.isNaN(Date.parse(value))
  );
}

function validateState(value: unknown): asserts value is EstadoVuelo {
  if (!estadosVuelo.includes(value as EstadoVuelo)) {
    throw new HttpError(
      "El estado debe ser en hora, cancelado o demorado",
      400,
    );
  }
}

async function validateAirports(
  origen: unknown,
  destino: unknown,
): Promise<void> {
  if (!positiveInteger(origen) || !positiveInteger(destino)) {
    throw new HttpError("Los aeropuertos deben ser enteros positivos", 400);
  }
  if (origen === destino) {
    throw new HttpError(
      "El aeropuerto de origen y destino no pueden ser iguales",
      400,
    );
  }
  const [rows] = await db.query<RowDataPacket[]>(
    "SELECT id_aeropuerto FROM aeropuertos WHERE id_aeropuerto IN (?, ?) AND activo = TRUE",
    [origen, destino],
  );
  if (rows.length !== 2) {
    throw new HttpError("Los aeropuertos deben existir y estar activos", 400);
  }
}

function validateSchedule(
  fechaSalida: unknown,
  fechaLlegada: unknown,
  horaSalida: unknown,
  horaLlegada: unknown,
  estado: unknown,
  nuevoHorario: unknown,
): void {
  if (
    !validDateTime(fechaSalida) ||
    !validDateTime(fechaLlegada) ||
    typeof horaSalida !== "string" ||
    !timePattern.test(horaSalida) ||
    typeof horaLlegada !== "string" ||
    !timePattern.test(horaLlegada)
  ) {
    throw new HttpError("Las fechas y horas no tienen un formato válido", 400);
  }
  const salida = new Date(`${fechaSalida}T${horaSalida}`);
  const llegada = new Date(`${fechaLlegada}T${horaLlegada}`);
  if (llegada <= salida) {
    throw new HttpError("La llegada debe ser posterior a la salida", 400);
  }
  validateState(estado);
  if (estado === "demorado") {
    if (!validDateTime(nuevoHorario)) {
      throw new HttpError(
        "nuevoHorario es obligatorio para vuelos demorados",
        400,
      );
    }
    if (new Date(nuevoHorario) <= salida) {
      throw new HttpError("nuevoHorario debe ser posterior a la salida", 400);
    }
  } else if (
    nuevoHorario !== null &&
    nuevoHorario !== undefined &&
    nuevoHorario !== ""
  ) {
    throw new HttpError(
      "nuevoHorario solo puede usarse en vuelos demorados",
      400,
    );
  }
}

export async function validateVueloCreate(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const body = bodyObject(req.body);
    const allowed = new Set([
      "idAeropuertoOrigen",
      "idAeropuertoDestino",
      "fechaSalida",
      "fechaLlegada",
      "horaSalida",
      "horaLlegada",
      "horaSalida",
      "horaLlegada",
      "precio",
      "estado",
      "nuevoHorario",
    ]);
    const extras = Object.keys(body).filter((key) => !allowed.has(key));
    if (extras.length)
      throw new HttpError(
        `Propiedades no permitidas: ${extras.join(", ")}`,
        400,
      );
    if (typeof body.precio !== "number" || body.precio <= 0) {
      throw new HttpError("El precio debe ser positivo", 400);
    }
    await validateAirports(body.idAeropuertoOrigen, body.idAeropuertoDestino);
    validateSchedule(
      body.fechaSalida,
      body.fechaLlegada,
      body.horaSalida,
      body.horaLlegada,
      body.estado ?? "en hora",
      body.nuevoHorario ?? null,
    );
    next();
  } catch (error) {
    next(error);
  }
}

export async function validateVueloUpdate(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const body = bodyObject(req.body);
    const allowed = new Set([
      "idAeropuertoOrigen",
      "idAeropuertoDestino",
      "fechaSalida",
      "fechaLlegada",
      "horaSalida",
      "horaLlegada",
      "precio",
      "estado",
      "nuevoHorario",
    ]);
    const extras = Object.keys(body).filter((key) => !allowed.has(key));
    if (extras.length)
      throw new HttpError(
        `Propiedades no permitidas: ${extras.join(", ")}`,
        400,
      );
    if (Object.keys(body).length === 0) {
      throw new HttpError("Debe enviar al menos un campo para actualizar", 400);
    }
    if (
      body.fechaSalida !== undefined ||
      body.fechaLlegada !== undefined ||
      body.horaSalida !== undefined ||
      body.horaLlegada !== undefined
    ) {
      if (
        !validDateTime(body.fechaSalida) ||
        !validDateTime(body.fechaLlegada) ||
        typeof body.horaSalida !== "string" ||
        !timePattern.test(body.horaSalida) ||
        typeof body.horaLlegada !== "string" ||
        !timePattern.test(body.horaLlegada)
      ) {
        throw new HttpError("Las fechas y horas no tienen un formato válido", 400);
      }
    }
    if (
      body.precio !== undefined &&
      (typeof body.precio !== "number" || body.precio <= 0)
    ) {
      throw new HttpError("El precio debe ser positivo", 400);
    }
    if (body.estado !== undefined) validateState(body.estado);
    if (
      body.idAeropuertoOrigen !== undefined &&
      body.idAeropuertoDestino !== undefined
    ) {
      await validateAirports(body.idAeropuertoOrigen, body.idAeropuertoDestino);
    } else if (
      body.idAeropuertoOrigen !== undefined ||
      body.idAeropuertoDestino !== undefined
    ) {
      const airportId = body.idAeropuertoOrigen ?? body.idAeropuertoDestino;
      if (!positiveInteger(airportId)) {
        throw new HttpError("El aeropuerto debe ser un entero positivo", 400);
      }
      const [rows] = await db.query<RowDataPacket[]>(
        "SELECT id_aeropuerto FROM aeropuertos WHERE id_aeropuerto = ? AND activo = TRUE",
        [airportId],
      );
      if (rows.length === 0) {
        throw new HttpError("El aeropuerto debe existir y estar activo", 400);
      }
    }
    if (
      body.nuevoHorario !== undefined &&
      body.nuevoHorario !== null &&
      !validDateTime(body.nuevoHorario)
    ) {
      throw new HttpError("nuevoHorario no tiene un formato válido", 400);
    }
    next();
  } catch (error) {
    next(error);
  }
}

export function validateAeropuertoBody(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  void validateAeropuerto(req, true)
    .then(() => next())
    .catch(next);
}

export function validateAeropuertoUpdate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  void validateAeropuerto(req, false)
    .then(() => next())
    .catch(next);
}

async function validateAeropuerto(
  req: Request,
  required: boolean,
): Promise<void> {
  const body = bodyObject(req.body);
  const allowed = new Set(["nombre", "ciudad", "pais"]);
  const extras = Object.keys(body).filter((key) => !allowed.has(key));
  if (extras.length)
    throw new HttpError(`Propiedades no permitidas: ${extras.join(", ")}`, 400);
  const fields = ["nombre", "ciudad", "pais"];
  if (
    required &&
    fields.some(
      (field) =>
        typeof body[field] !== "string" || !(body[field] as string).trim(),
    )
  ) {
    throw new HttpError("nombre, ciudad y pais son obligatorios", 400);
  }
  if (
    !required &&
    (Object.keys(body).length === 0 ||
      Object.values(body).some(
        (value) => typeof value !== "string" || !value.trim(),
      ))
  ) {
    throw new HttpError(
      "Los campos a actualizar deben ser textos no vacíos",
      400,
    );
  }
  for (const field of fields) {
    if (body[field] !== undefined) body[field] = (body[field] as string).trim();
  }
  if (required || fields.every((field) => body[field] !== undefined)) {
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT id_aeropuerto FROM aeropuertos
       WHERE LOWER(nombre) = LOWER(?) AND LOWER(ciudad) = LOWER(?) AND LOWER(pais) = LOWER(?)
         AND activo = TRUE AND id_aeropuerto <> ? LIMIT 1`,
      [body.nombre, body.ciudad, body.pais, req.params.id ?? 0],
    );
    if (rows.length) throw new HttpError("El aeropuerto ya existe", 409);
  }
  req.body = body;
}
