import type Vuelo from "../../Vuelos/Entity/Vuelo.Entity.js";

class Pasaje {
  private _id: number;
  private _vuelo: Vuelo;
  private _precio: number;
  private _fecha: string;
  private _hora: string;

  constructor(
    id: number,
    vuelo: Vuelo,
    precio: number,
    fecha: string,
    hora: string,
  ) {
    this._id = id;
    this._vuelo = vuelo;
    this._precio = precio;
    this._fecha = fecha;
    this._hora = hora;
  }

  get id(): number {
    return this._id;
  }

  get vuelo(): Vuelo {
    return this._vuelo;
  }

  get precio(): number {
    return this._precio;
  }

  get fecha(): string {
    return this._fecha;
  }

  get hora(): string {
    return this._hora;
  }

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
