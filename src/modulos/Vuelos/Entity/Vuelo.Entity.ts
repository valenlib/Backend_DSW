export type EstadoVuelo = 'en hora' | 'atrasado' | 'demorado';

class Vuelo {
  private _id: number;
  private _avion: string;
  private _origen: string;
  private _destino: string;
  private _fecha: string;
  private _hora: string;
  private _precio: number;  
  private _estado: EstadoVuelo;
  private _nuevoHorario: string;
  private _activo: boolean;

  constructor (
    id: number,
    avion: string,
    origen: string,
    destino: string,
    fecha: string,
    hora: string,
    precio: number,
    estado: EstadoVuelo = 'en hora',
    nuevoHorario: string = '',
    activo: boolean = true,
  ) {
    this._id = id;
    this._avion = avion;
    this._origen = origen;
    this._destino = destino;
    this._fecha = fecha;
    this._hora = hora;
    this._precio = precio;
    this._estado = estado;
    this._nuevoHorario = nuevoHorario;
    this._activo = activo;
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
    return this._fecha;
  }
  get hora() {
    return this._hora;
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
  get activo() {
    return this._activo;
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
    this._fecha = fecha;
  }
  set hora(hora: string) {
    this._hora = hora;
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
  set activo(activo: boolean) {
    this._activo = activo;
  }

}

export default Vuelo;