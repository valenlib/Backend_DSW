import type Pasaje from "./Pasaje";

class Reserva {
  private _id: number;
  private _pasaje: Pasaje;
  private _pasajero: Pasajero; 
  constructor(id: number, pasaje: Pasaje, pasajero: Pasajero) {
    this._id = id;
    this._pasaje = pasaje;
    this._pasajero = pasajero;
  }

  // Getters
  get id() {
    return this._id;
  }

  get pasaje() {
    return this._pasaje;
  }

  get pasajero() {
    return this._pasajero;
  }

  get vuelo() {
    return this._pasaje.vuelo;
  }

  get cantPasajes() {
    return this._pasaje.cantPasajes;
  }

  get precio() {
    return this._pasaje.precio;
  }

  get fecha() {
    return this._pasaje.fecha;
  }

  get hora() {
    return this._pasaje.hora;
  }

  // Setters
  set id(id: number) {
    this._id = id;
  }

  set pasaje(pasaje: Pasaje) {
    this._pasaje = pasaje;
  }

  set pasajero(pasajero: Pasajero) {
    this._pasajero = pasajero;
  }

  set vuelo(vuelo: string) {
    this._pasaje.vuelo = vuelo;
  }

  set cantPasajes(cantPasajes: number) {
    this._pasaje.cantPasajes = cantPasajes;
  }

  set fecha(fecha) {
    this._pasaje.fecha = fecha;
  }

  set hora(hora) {
    this._pasaje.hora = hora;
  }

  // Método para calcular el precio total de la reserva
  get precioTotal() {
    return this.calcularPrecioTotal();
  }

  calcularPrecioTotal() {
    return this._pasaje.precio * this._pasaje.cantPasajes;
  }
}



export default Reserva;
