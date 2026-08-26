
class Pasaje {
    private _id: number;
    private _precio: number;
    private _fecha: string;
    private _hora: string;
    private _origen: string;
    private _destino: string;   
    constructor(id: number, precio: number, fecha: string, hora: string, origen: string, destino: string) {
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
    set id(id: number) {
        this._id = id;
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
    set origen(origen: string) {
        this._origen = origen;
    }
    set destino(destino: string) {
        this._destino = destino;
    }
}


export default Pasaje;

