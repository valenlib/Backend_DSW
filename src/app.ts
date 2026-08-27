import express from 'express';
import { AdminController } from './modulos/Usuarios/Controllers/Admin.Controller';
import { AuthController } from './modulos/Usuarios/Controllers/Auth.Controller';
import { UsuarioController } from './modulos/Usuarios/Controllers/UsuarioController';
import {Usuario} from './modulos/Usuarios/Entity/Usuario.entity';

const app = express()
//post -> crear un recurso
//get -> obtener info sobre recursos
//put y patch -> actualizar un recurso
//delete -> eliminar un recurso
//ejemplo de ruta: /api/v1/users/1
//user -> /api/v1/users
//get /api/v1/users -> obtener lista de usuarios
//get /api/v1/users/1 -> obtener info del usuario con id 1
//get /api/v1/users/:id -> obtener info del usuario con id especificado
const usuarios :Usuario [] = [new Usuario(1, "Juan", "Perez", "juan@example.com"), new Usuario(2, "Maria", "Gomez", "maria@example.com")];

//middleware para parsear el body de las peticiones (ver donde mandarlo)
function sanitizeInput(req:request, res:Response, next:NextFunction) {
  req.body.sanitizedInput ={ 
    name: req.body.name.trim(),
    surname: req.body.surname.trim(),
    email: req.body.email.trim().toLowerCase()

  };
  // mas validaciones y sanitizaciones
  next();
}



app.use('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/v1/Usuario', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});