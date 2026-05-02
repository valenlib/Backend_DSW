import Usuario from "../models/Usuario.js";

//crear usuario
function crearUsuario(id, nombre, email) {
    const usuario = new Usuario(id, nombre, email);
    return usuario;
}

export { crearUsuario };

//listar usuarios
function listarUsuarios(usuarios) {
    return usuarios;
}

//buscar usuario por id
function buscarUsuarioPorId(usuarios, id) {
    return usuarios.find(usuario => usuario.id === id);
}

export { listarUsuarios, buscarUsuarioPorId };

//actualizar usuario
function actualizarUsuario(usuarios, id, nombre, email) {
    const usuario = buscarUsuarioPorId(usuarios, id);
    if (usuario) {
        usuario.nombre = nombre;
        usuario.email = email;
    }
    return usuario;
}

export { actualizarUsuario };

//eliminar usuario
function eliminarUsuario(usuarios, id) {
    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
        usuarios.splice(index, 1);
        return true;
    }
    return false;
}

export { eliminarUsuario };

