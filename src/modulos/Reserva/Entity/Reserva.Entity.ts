import type Pasaje from "./Pasaje.Entity";
import type Usuario from "../../Usuarios/Entity/Usuario.entity";
import type Vuelo from "./Vuelo.Entity";
class Reserva {
  private _id: number;
  private _pasaje: Pasaje;
  private _pasajero: Usuario;
  private _cantPasajes: number;
  constructor(id: number, pasaje: Pasaje, pasajero: Usuario, cantPasajes: number) {
    this._id = id;
    this._pasaje = pasaje;
    this._pasajero = pasajero;
    this._cantPasajes = cantPasajes;
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
    return this._cantPasajes;
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

  set pasajero(pasajero: Usuario) {
    this._pasajero = pasajero;
  }

  set vuelo(vuelo: Vuelo) {
    this._pasaje.vuelo = vuelo;
  }

  set cantPasajes(cantPasajes: number) {
    this._cantPasajes = cantPasajes;
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
    return this._pasaje.precio * this._cantPasajes;
  }
}



export default Reserva;
