import express from 'express';
import { Request, Response, NextFunction } from 'express';
import {
  closeDatabaseConnection,
  testDatabaseConnection,
} from './shared/conn.mysql';
import { AdminController } from './modulos/Usuarios/Controllers/Admin.Controller';
import AdminServiceImpl from './modulos/Usuarios/Services Implementation/Admin.Service.Impl';

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
const usuarios: Usuario[] = [
  new Usuario(1, 'Juan', 'Perez', 'juan@example.com'),
  new Usuario(2, 'Maria', 'Gomez', 'maria@example.com'),
];

//middleware para parsear el body de las peticiones (ver donde mandarlo)
function sanitizeInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput ={ 
    name: req.body.name.trim(),
    surname: req.body.surname.trim(),
    email: req.body.email.trim().toLowerCase()

  };
  // mas validaciones y sanitizaciones
  next();
}



app.use(express.json());

const adminController = new AdminController(new AdminServiceImpl());

app.get('/api/v1/Usuario', (req: Request, res: Response) =>
  adminController.findAll(req, res),
);

app.get('/api/v1/Usuario/search/:criterio', (req: Request, res: Response) =>
  adminController.findByCriterio(req, res),
);

app.get('/api/v1/Usuario/:id', (req: Request, res: Response) =>
  adminController.findById(req, res),
);

app.use('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

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