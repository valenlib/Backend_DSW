import express from 'express';
import { AdminController } from './Usuarios/Controllers/AdminController';
import { AuthController } from './Usuarios/Controllers/AuthController';
import { UsuarioController } from './Usuarios/Controllers/UsuarioController';
import {Usuario} from './modelsTS/Usuario';

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


app.use('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/v1/Usuario', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});