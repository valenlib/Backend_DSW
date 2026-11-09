export type EstadoReserva = "pendiente" | "confirmada" | "cancelada";
declare class Reserva {
    private _id;
    private _idVuelo;
    private _idUsuario;
    private _fechaReserva;
    private _estado;
    private _cantidadPasajes;
    private _activa;
    constructor(id: number, idVuelo: number, idUsuario: number, fechaReserva: string, estado?: EstadoReserva, cantidadPasajes?: number, activa?: boolean);
    get id(): number;
    get idVuelo(): number;
    get idUsuario(): number;
    get fechaReserva(): string;
    get estado(): EstadoReserva;
    get cantidadPasajes(): number;
    get activa(): boolean;
    set id(id: number);
    set idVuelo(idVuelo: number);
    set idUsuario(idUsuario: number);
    set fechaReserva(fechaReserva: string);
    set estado(estado: EstadoReserva);
    set cantidadPasajes(cantidadPasajes: number);
    set activa(activa: boolean);
}
export default Reserva;
//# sourceMappingURL=Reserva.Entity.d.ts.map