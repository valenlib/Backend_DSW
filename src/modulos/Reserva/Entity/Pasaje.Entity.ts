import type Vuelo from './Vuelo.Entity';

class Pasaje {
    private _id: number;
    private _vuelo: Vuelo;
    private _precio: number;
    private _fecha: string;
    private _hora: string;
    constructor(id: number, vuelo: Vuelo, precio: number, fecha: string, hora: string) {
        this._id = id;
        this._vuelo = vuelo;
        this._precio = precio;
        this._fecha = fecha;
        this._hora = hora;
    }

    // Getters
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
    // Setters
    set id(id: number) {
        this._id = id;
    }
    set vuelo(vuelo: Vuelo) {
        this._vuelo = vuelo;
    }
    set precio(precio: number) {
        this._precio = precio;
    }
    set fecha(fecha: string) {
        this._fecha = fecha;
    }
    set hora(hora: string) {
        this._hora = hora;
    }
}


export default Pasaje;
