import express from "express";
import { Request, Response } from "express";
import {
  closeDatabaseConnection,
  testDatabaseConnection,
} from "./shared/conn.mysql.js";
import { AdminController } from "./modulos/Usuarios/Controllers/Admin.Controller.js";
import AdminServiceImpl from "./modulos/Usuarios/Services Implementation/Admin.Service.Impl.js";
import { AuthController } from "./modulos/Usuarios/Controllers/Auth.Controller.js";
import AuthServiceImpl from "./modulos/Usuarios/Services Implementation/Auth.Service.Impl.js";
import { RegistroController } from "./modulos/Usuarios/Controllers/Registro.Controller.js";
import RegistroServiceImpl from "./modulos/Usuarios/Services Implementation/Registro.service.Impl.js";
import errorHandler from "./shared/error-handler.js";
import {
  validateCreateUser,
  validateId,
  validateLogin,
  validateSearchCriteria,
  validateUserUpdate,
} from "./shared/Validaciones/user-validation.js";
import ReservaController from "./modulos/Reserva/Controllers/Reserva.Controller.js";
import ReservaServiceImpl from "./modulos/Reserva/Services Implementation/Reserva.Service.Impl.js";
import AeropuertoController from "./modulos/Vuelos/Controllers/Aeropuerto.Controller.js";
import AeropuertoServiceImpl from "./modulos/Vuelos/Services Implementation/Aeropuerto.Service.Impl.js";
import VueloController from "./modulos/Vuelos/Controllers/Vuelo.Controller.js";
import VueloServiceImpl from "./modulos/Vuelos/Services Implementation/Vuelo.Service.Impl.js";
import {
  validateReservaBody,
  validateReservaUpdate,
} from "./shared/Validaciones/reserva-validation.js";
import {
  validateAeropuertoBody,
  validateAeropuertoUpdate,
  validateVueloCreate,
  validateVueloUpdate,
} from "./shared/Validaciones/vuelos-validation.js";
import { HttpError, logUnexpectedError } from "./shared/error-handler.js";
import {
  authMiddleware,
  requireRole,
  requireSelfOrRole,
} from "./shared/JWT/auth.middleware.js";
const app = express();

app.use(express.json());
const adminController = new AdminController(new AdminServiceImpl());
const authController = new AuthController(new AuthServiceImpl());
const registroController = new RegistroController(new RegistroServiceImpl());
const reservaController = new ReservaController(new ReservaServiceImpl());
const aeropuertoController = new AeropuertoController(
  new AeropuertoServiceImpl(),
);
const vueloController = new VueloController(new VueloServiceImpl());
app.post("/api/v1/Usuario", validateCreateUser, (req: Request, res: Response) =>
  registroController.registrarUsuario(req, res),
);
app.post(
  "/api/v1/Usuario/Login",
  validateLogin,
  (req: Request, res: Response) => authController.login(req, res),
);
app.post("/api/v1/Usuario/Refresh", (req: Request, res: Response) =>
  authController.refresh(req, res),
);
app.post(
  "/api/v1/Usuario/Logout",
  authMiddleware,
  (req: Request, res: Response) => authController.logout(req, res),
);
app.get(
  "/api/v1/Usuario",
  authMiddleware,
  requireRole("admin"),
  (req: Request, res: Response) => adminController.findAll(req, res),
);
app.get(
  "/api/v1/Usuario/search/:criterio",
  authMiddleware,
  requireRole("admin"),
  validateSearchCriteria,
  (req: Request, res: Response) => adminController.findByCriterio(req, res),
);
app.get(
  "/api/v1/Usuario/:id",
  authMiddleware,
  requireSelfOrRole("admin"),
  (req: Request, res: Response) => adminController.findById(req, res),
);
app.patch(
  "/api/v1/Usuario/:id",
  authMiddleware,
  requireSelfOrRole("admin"),
  validateUserUpdate,
  (req: Request, res: Response) => adminController.update(req, res),
);
app.patch(
  "/api/v1/Usuario/:id/logical-delete",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => adminController.logicalDelete(req, res),
);
app.delete(
  "/api/v1/Usuario/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => adminController.delete(req, res),
);
app.get("/api/v1/Reserva", authMiddleware, (req: Request, res: Response) =>
  reservaController.findAll(req, res),
);
app.get(
  "/api/v1/Reserva/:id",
  authMiddleware,
  validateId,
  (req: Request, res: Response) => reservaController.findById(req, res),
);
app.post(
  "/api/v1/Reserva",
  authMiddleware,
  validateReservaBody,
  (req: Request, res: Response) => reservaController.create(req, res),
);
app.get(
  "/api/v1/Reserva/email/:email",
  authMiddleware,
  (req: Request, res: Response) => reservaController.findByEmail(req, res),
);
app.patch(
  "/api/v1/Reserva/:id",
  authMiddleware,
  validateId,
  validateReservaUpdate,
  (req: Request, res: Response) => reservaController.update(req, res),
);
app.patch(
  "/api/v1/Reserva/:id/logical-delete",
  authMiddleware,
  validateId,
  (req: Request, res: Response) => reservaController.logicalDelete(req, res),
);
app.delete(
  "/api/v1/Reserva/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => reservaController.delete(req, res),
);
app.get(
  "/api/v1/Aeropuerto",
  authMiddleware,
  requireRole("admin"),
  (req: Request, res: Response) => aeropuertoController.findAll(req, res),
);
app.get(
  "/api/v1/Aeropuerto/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => aeropuertoController.findById(req, res),
);
app.post(
  "/api/v1/Aeropuerto",
  authMiddleware,
  requireRole("admin"),
  validateAeropuertoBody,
  (req: Request, res: Response) => aeropuertoController.create(req, res),
);
app.patch(
  "/api/v1/Aeropuerto/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  validateAeropuertoUpdate,
  (req: Request, res: Response) => aeropuertoController.update(req, res),
);
app.patch(
  "/api/v1/Aeropuerto/:id/logical-delete",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => aeropuertoController.logicalDelete(req, res),
);
app.delete(
  "/api/v1/Aeropuerto/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => aeropuertoController.delete(req, res),
);
app.get(
  "/api/v1/Vuelo",
  authMiddleware,
  (req: Request, res: Response) => vueloController.findAll(req, res),
);
app.get(
  "/api/v1/Vuelo/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => vueloController.findById(req, res),
);
app.post(
  "/api/v1/Vuelo",
  authMiddleware,
  requireRole("admin"),
  validateVueloCreate,
  (req: Request, res: Response) => vueloController.create(req, res),
);
app.patch(
  "/api/v1/Vuelo/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  validateVueloUpdate,
  (req: Request, res: Response) => vueloController.update(req, res),
);
app.delete(
  "/api/v1/Vuelo/:id",
  authMiddleware,
  requireRole("admin"),
  validateId,
  (req: Request, res: Response) => vueloController.delete(req, res),
);
app.use((req: Request, res: Response, next) => {
  next(new HttpError("Ruta no encontrada", 404));
});
app.use(errorHandler);
const server = app.listen(3000, async () => {
  try {
    await testDatabaseConnection();
    console.log("Server is running on http://localhost:3000/");
  } catch (error) {
    logUnexpectedError("startup failure", error);
    server.close(async () => {
      try {
        await closeDatabaseConnection();
      } catch (closeError) {
        logUnexpectedError("database shutdown failure", closeError);
        process.exitCode = 1;
      }
      process.exitCode = 1;
    });
  }
});
let shuttingDown = false;
async function shutdown(signal: string): Promise<void> {
  if (shuttingDown) {
    return;
  }
  shuttingDown = true;
  console.log(`${signal} received, shutting down`);
  server.close(async (error) => {
    if (error) {
      logUnexpectedError("HTTP server shutdown failure", error);
      process.exitCode = 1;
    }
    try {
      await closeDatabaseConnection();
    } catch (closeError) {
      logUnexpectedError("database shutdown failure", closeError);
      process.exitCode = 1;
    }
  });
}
process.once("SIGINT", () => void shutdown("SIGINT"));
process.once("SIGTERM", () => void shutdown("SIGTERM"));
process.on("unhandledRejection", (reason) => {
  logUnexpectedError("unhandled promise rejection", reason);
  void shutdown("unhandled promise rejection");
});
process.on("uncaughtException", (error) => {
  logUnexpectedError("uncaught exception", error);
  void shutdown("uncaught exception");
});
