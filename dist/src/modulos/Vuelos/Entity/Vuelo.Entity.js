class Vuelo {
    constructor(id, avion, origen, destino, fechaSalida, fechaLlegada, horaSalida, horaLlegada, precio, estado = 'en hora', nuevoHorario = '') {
        this._id = id;
        this._avion = avion;
        this._origen = origen;
        this._destino = destino;
        this._fechaSalida = fechaSalida;
        this._fechaLlegada = fechaLlegada;
        this._horaSalida = horaSalida;
        this._horaLlegada = horaLlegada;
        this._precio = precio;
        this._estado = estado;
        this._nuevoHorario = nuevoHorario;
    }
    // Getters
    get id() {
        return this._id;
    }
    get avion() {
        return this._avion;
    }
    get origen() {
        return this._origen;
    }
    get destino() {
        return this._destino;
    }
    get fecha() {
        return this._fechaSalida;
    }
    get hora() {
        return this._horaSalida;
    }
    get precio() {
        return this._precio;
    }
    get estado() {
        return this._estado;
    }
    get nuevoHorario() {
        return this._nuevoHorario;
    }
    // Setters
    set id(id) {
        this._id = id;
    }
    set avion(avion) {
        this._avion = avion;
    }
    set origen(origen) {
        this._origen = origen;
    }
    set destino(destino) {
        this._destino = destino;
    }
    set fecha(fecha) {
        this._fechaSalida = fecha;
    }
    set hora(hora) {
        this._horaSalida = hora;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set estado(estado) {
        this._estado = estado;
    }
    set nuevoHorario(nuevoHorario) {
        this._nuevoHorario = nuevoHorario;
    }
    set horaSalida(horaSalida) {
        this._horaSalida = horaSalida;
    }
    set horaLlegada(horaLlegada) {
        this._horaLlegada = horaLlegada;
    }
}
export default Vuelo;
//# sourceMappingURL=Vuelo.Entity.js.map