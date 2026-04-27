
class Pasaje {
    constructor(id, precio, fecha, hora, origen, destino) {
        this._id = id;
        this._precio = precio;
        this._fecha = fecha;
        this._hora = hora;
        this._origen = origen;
        this._destino = destino;
    }

    // Getters
    get id() {
        return this._id;
    }
    get precio() {
        return this._precio;
    }
    get fecha() {
        return this._fecha;
    }
    get hora() {
        return this._hora;
    }
    get origen() {
        return this._origen;
    }
    get destino() {
        return this._destino;
    }

    // Setters
    set id(id) {
        this._id = id;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    set hora(hora) {
        this._hora = hora;
    }
    set origen(origen) {
        this._origen = origen;
    }
    set destino(destino) {
        this._destino = destino;
    }
}

module.exports = Pasaje;
