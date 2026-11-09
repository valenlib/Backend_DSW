export type EstadoReserva = 'pendiente' | 'confirmada' | 'cancelada';

class Reserva {
  private _id: number;
  private _idViaje: number;
  private _idUsuario: number;
  private _fechaReserva: string;
  private _estado: EstadoReserva;
  private _cantidadPasajes: number;
  private _activa: boolean;

  constructor(
    id: number,
    idViaje: number,
    idUsuario: number,
    fechaReserva: string,
    estado: EstadoReserva = 'pendiente',
    cantidadPasajes: number = 1,
    activa: boolean = true,
  ) {
    this._id = id;
    this._idViaje = idViaje;
    this._idUsuario = idUsuario;
    this._fechaReserva = fechaReserva;
    this._estado = estado;
    this._cantidadPasajes = cantidadPasajes;
    this._activa = activa;
  }

  get id(): number {
    return this._id;
  }

  get idViaje(): number {
    return this._idViaje;
  }

  get idUsuario(): number {
    return this._idUsuario;
  }

  get fechaReserva(): string {
    return this._fechaReserva;
  }

  get estado(): EstadoReserva {
    return this._estado;
  }

  get cantidadPasajes(): number {
    return this._cantidadPasajes;
  }

  get activa(): boolean {
    return this._activa;
  }

  set id(id: number) {
    this._id = id;
  }

  set idViaje(idViaje: number) {
    this._idViaje = idViaje;
  }

  set idUsuario(idUsuario: number) {
    this._idUsuario = idUsuario;
  }

  set fechaReserva(fechaReserva: string) {
    this._fechaReserva = fechaReserva;
  }

  set estado(estado: EstadoReserva) {
    this._estado = estado;
  }

  set cantidadPasajes(cantidadPasajes: number) {
    this._cantidadPasajes = cantidadPasajes;
  }

  set activa(activa: boolean) {
    this._activa = activa;
  }
}

export default Reserva;
