class Pasaje {
    constructor(id, vuelo, precio, fecha, hora) {
        this._id = id;
        this._vuelo = vuelo;
        this._precio = precio;
        this._fecha = fecha;
        this._hora = hora;
    }
    get id() {
        return this._id;
    }
    get vuelo() {
        return this._vuelo;
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
    set id(id) {
        this._id = id;
    }
    set vuelo(vuelo) {
        this._vuelo = vuelo;
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
}
export default Pasaje;
//# sourceMappingURL=Pasaje.Entity.js.map