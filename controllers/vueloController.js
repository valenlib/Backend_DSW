import Aeropuerto from "../models/Aeropuerto.js";
import Avion from "../models/Avion.js";
import Vuelo from "../models/Vuelo.js";

//crear vuelos
function crearVuelo(id, origen, destino, fecha, hora, avion) {
    const vuelo = new Vuelo(id, avion, origen, destino, fecha, hora);
    return vuelo;
}

export { crearVuelo };

//listar vuelos
function listarVuelos(vuelos) {
    return vuelos;
}

//buscar vuelo por id
function buscarVueloPorId(vuelos, id) {
    return vuelos.find(vuelo => vuelo.id === id);
}

export { listarVuelos, buscarVueloPorId };

//actualizar vuelo
function actualizarVuelo(vuelos, id, origen, destino, fecha, hora, avion) {
    const vuelo = buscarVueloPorId(vuelos, id);
    if (vuelo) {
        vuelo.origen = origen;
        vuelo.destino = destino;
        vuelo.fecha = fecha;
        vuelo.hora = hora;
        vuelo.avion = avion;
    }
    return vuelo;
}

export { actualizarVuelo };

//eliminar vuelo
function eliminarVuelo(vuelos, id) {
    const index = vuelos.findIndex(vuelo => vuelo.id === id);
    if (index !== -1) {
        vuelos.splice(index, 1);
        return true;
    }
    return false;
}

export { eliminarVuelo };
