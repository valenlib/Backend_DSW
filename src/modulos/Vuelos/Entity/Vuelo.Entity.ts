export type EstadoVuelo = "en hora" | "cancelado" | "demorado";

class Vuelo {
  private _id: number;
  private _avion: string;
  private _origen: string;
  private _destino: string;
  private _fechaSalida: string;
  private _fechaLlegada: string;
  private _horaSalida: string;
  private _horaLlegada: string;
  private _precio: number;
  private _estado: EstadoVuelo;
  private _nuevoHorario: string;

  constructor(
    id: number,
    avion: string,
    origen: string,
    destino: string,
    fechaSalida: string,
    fechaLlegada: string,
    horaSalida: string,
    horaLlegada: string,
    precio: number,
    estado: EstadoVuelo = "en hora",
    nuevoHorario: string = "",
  ) {
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
  set id(id: number) {
    this._id = id;
  }
  set avion(avion: string) {
    this._avion = avion;
  }
  set origen(origen: string) {
    this._origen = origen;
  }
  set destino(destino: string) {
    this._destino = destino;
  }
  set fecha(fecha: string) {
    this._fechaSalida = fecha;
  }
  set hora(hora: string) {
    this._horaSalida = hora;
  }
  set precio(precio: number) {
    this._precio = precio;
  }
  set estado(estado: EstadoVuelo) {
    this._estado = estado;
  }
  set nuevoHorario(nuevoHorario: string) {
    this._nuevoHorario = nuevoHorario;
  }

  set horaSalida(horaSalida: string) {
    this._horaSalida = horaSalida;
  }
  set horaLlegada(horaLlegada: string) {
    this._horaLlegada = horaLlegada;
  }
}

export default Vuelo;
