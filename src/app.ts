import express from 'express';
import { Request, Response } from 'express';
import {
  closeDatabaseConnection,
  testDatabaseConnection,
} from './shared/conn.mysql';
import { AdminController } from './modulos/Usuarios/Controllers/Admin.Controller';
import AdminServiceImpl from './modulos/Usuarios/Services Implementation/Admin.Service.Impl';
import { AuthController } from './modulos/Usuarios/Controllers/Auth.Controller';
import AuthServiceImpl from './modulos/Usuarios/Services Implementation/Auth.Service.Impl';
import { RegistroController } from './modulos/Usuarios/Controllers/Registro.Controller';
import RegistroServiceImpl from './modulos/Usuarios/Services Implementation/Registro.service.Impl';
import errorHandler from './shared/error-handler';
import {
  validateCreateUser,
  validateId,
  validateLogin,
  validateSearchCriteria,
  validateUserUpdate,
} from './shared/Validaciones/user-validation';
import ReservaController from './modulos/Reserva/Controllers/Reserva.Controller';
import ReservaServiceImpl from './modulos/Reserva/Services Implementation/Reserva.Service.Impl';
import {
  validateReservaBody,
  validateReservaUpdate,
} from './shared/Validaciones/reserva-validation';
import { HttpError, logUnexpectedError } from './shared/error-handler';
import {
  authMiddleware,
  requireRole,
  requireSelfOrRole,
} from './shared/JWT/auth.middleware';

const app = express();
//post -> crear un recurso
//get -> obtener info sobre recursos
//put y patch -> actualizar un recurso
//delete -> eliminar un recurso
//ejemplo de ruta: /api/v1/users/1
//user -> /api/v1/users
//get /api/v1/users -> obtener lista de usuarios
//get /api/v1/users/1 -> obtener info del usuario con id 1
//get /api/v1/users/:id -> obtener info del usuario con id especificado
app.use(express.json());

const adminController = new AdminController(new AdminServiceImpl());
const authController = new AuthController(new AuthServiceImpl());
const registroController = new RegistroController(new RegistroServiceImpl());
const reservaController = new ReservaController(new ReservaServiceImpl());

app.post('/api/v1/Usuario', validateCreateUser, (req: Request, res: Response) =>
  registroController.registrarUsuario(req, res),
);

app.post('/api/v1/Usuario/Login', validateLogin, (req: Request, res: Response) =>
  authController.login(req, res),
);

app.post('/api/v1/Usuario/Refresh', (req: Request, res: Response) =>
  authController.refresh(req, res),
);

app.post('/api/v1/Usuario/Logout', authMiddleware, (req: Request, res: Response) =>
  authController.logout(req, res),
);

app.get('/api/v1/Usuario', authMiddleware, requireRole('admin'), (req: Request, res: Response) =>
  adminController.findAll(req, res),
);

app.get('/api/v1/Usuario/search/:criterio', authMiddleware, requireRole('admin'), validateSearchCriteria, (req: Request, res: Response) =>
  adminController.findByCriterio(req, res),
);

app.get('/api/v1/Usuario/:id', authMiddleware, requireSelfOrRole('admin'), (req: Request, res: Response) =>
  adminController.findById(req, res),
);

app.patch('/api/v1/Usuario/:id', authMiddleware, requireSelfOrRole('admin'), validateUserUpdate, (req: Request, res: Response) =>
  adminController.update(req, res),
);

app.patch('/api/v1/Usuario/:id/logical-delete', authMiddleware, requireRole('admin'), validateId, (req: Request, res: Response) =>
  adminController.logicalDelete(req, res),
);

app.delete('/api/v1/Usuario/:id', authMiddleware, requireRole('admin'), validateId, (req: Request, res: Response) =>
  adminController.delete(req, res),
);

app.get('/api/v1/Reserva', authMiddleware, (req: Request, res: Response) =>
  reservaController.findAll(req, res),
);

app.get('/api/v1/Reserva/:id', authMiddleware, validateId, (req: Request, res: Response) =>
  reservaController.findById(req, res),
);

app.post('/api/v1/Reserva', authMiddleware, validateReservaBody, (req: Request, res: Response) =>
  reservaController.create(req, res),
);

app.patch('/api/v1/Reserva/:id', authMiddleware, validateId, validateReservaUpdate, (req: Request, res: Response) =>
  reservaController.update(req, res),
);

app.patch('/api/v1/Reserva/:id/logical-delete', authMiddleware, validateId, (req: Request, res: Response) =>
  reservaController.logicalDelete(req, res),
);

app.delete('/api/v1/Reserva/:id', authMiddleware, requireRole('admin'), validateId, (req: Request, res: Response) =>
  reservaController.delete(req, res),
);

app.use((req: Request, res: Response, next) => {
  next(new HttpError('Ruta no encontrada', 404));
});

app.use(errorHandler);

const server = app.listen(3000, async () => {
  try {
    await testDatabaseConnection();
    console.log('Server is running on http://localhost:3000/');
  } catch (error) {
    logUnexpectedError('startup failure', error);
    server.close(async () => {
      try {
        await closeDatabaseConnection();
      } catch (closeError) {
        logUnexpectedError('database shutdown failure', closeError);
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
      logUnexpectedError('HTTP server shutdown failure', error);
      process.exitCode = 1;
    }

    try {
      await closeDatabaseConnection();
    } catch (closeError) {
      logUnexpectedError('database shutdown failure', closeError);
      process.exitCode = 1;
    }
  });
}

process.once('SIGINT', () => void shutdown('SIGINT'));
process.once('SIGTERM', () => void shutdown('SIGTERM'));
process.on('unhandledRejection', (reason) => {
  logUnexpectedError('unhandled promise rejection', reason);
  void shutdown('unhandled promise rejection');
});
process.on('uncaughtException', (error) => {
  logUnexpectedError('uncaught exception', error);
  void shutdown('uncaught exception');
});