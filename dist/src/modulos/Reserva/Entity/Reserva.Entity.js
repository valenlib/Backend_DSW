class Reserva {
    constructor(id, idVuelo, idUsuario, fechaReserva, estado = "pendiente", cantidadPasajes = 1, activa = true) {
        this._id = id;
        this._idVuelo = idVuelo;
        this._idUsuario = idUsuario;
        this._fechaReserva = fechaReserva;
        this._estado = estado;
        this._cantidadPasajes = cantidadPasajes;
        this._activa = activa;
    }
    get id() {
        return this._id;
    }
    get idVuelo() {
        return this._idVuelo;
    }
    get idUsuario() {
        return this._idUsuario;
    }
    get fechaReserva() {
        return this._fechaReserva;
    }
    get estado() {
        return this._estado;
    }
    get cantidadPasajes() {
        return this._cantidadPasajes;
    }
    get activa() {
        return this._activa;
    }
    set id(id) {
        this._id = id;
    }
    set idVuelo(idVuelo) {
        this._idVuelo = idVuelo;
    }
    set idUsuario(idUsuario) {
        this._idUsuario = idUsuario;
    }
    set fechaReserva(fechaReserva) {
        this._fechaReserva = fechaReserva;
    }
    set estado(estado) {
        this._estado = estado;
    }
    set cantidadPasajes(cantidadPasajes) {
        this._cantidadPasajes = cantidadPasajes;
    }
    set activa(activa) {
        this._activa = activa;
    }
}
export default Reserva;
//# sourceMappingURL=Reserva.Entity.js.map