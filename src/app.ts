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

app.post('/api/v1/Usuario', validateCreateUser, (req: Request, res: Response) =>
  registroController.registrarUsuario(req, res),
);

app.post('/api/v1/Usuario/Login', validateLogin, (req: Request, res: Response) =>
  authController.login(req, res),
);

app.get('/api/v1/Usuario', (req: Request, res: Response) =>
  adminController.findAll(req, res),
);

app.get('/api/v1/Usuario/search/:criterio', validateSearchCriteria, (req: Request, res: Response) =>
  adminController.findByCriterio(req, res),
);

app.get('/api/v1/Usuario/:id', validateId, (req: Request, res: Response) =>
  adminController.findById(req, res),
);

app.patch('/api/v1/Usuario/:id', validateUserUpdate, (req: Request, res: Response) =>
  adminController.update(req, res),
);

app.put('/api/v1/Usuario/:id', validateUserUpdate, (req: Request, res: Response) =>
  adminController.update(req, res),
);

app.delete('/api/v1/Usuario/:id', validateId, (req: Request, res: Response) =>
  adminController.delete(req, res),
);

app.use('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(errorHandler);

const server = app.listen(3000, async () => {
  try {
    await testDatabaseConnection();
    console.log('Server is running on http://localhost:3000/');
  } catch {
    server.close(async () => {
      try {
        await closeDatabaseConnection();
      } catch {
        process.exitCode = 1;
      }
      process.exitCode = 1;
    });
  }
});

async function shutdown(signal: string): Promise<void> {
  console.log(`${signal} received, shutting down`);
  server.close(async (error) => {
    if (error) {
      console.error('Unable to close the HTTP server', error);
      process.exitCode = 1;
    }

    try {
      await closeDatabaseConnection();
    } catch {
      process.exitCode = 1;
    }
  });
}

process.once('SIGINT', () => void shutdown('SIGINT'));
process.once('SIGTERM', () => void shutdown('SIGTERM'));