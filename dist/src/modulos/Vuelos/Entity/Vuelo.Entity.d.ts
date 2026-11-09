export type EstadoVuelo = "en hora" | "cancelado" | "demorado";
declare class Vuelo {
    private _id;
    private _avion;
    private _origen;
    private _destino;
    private _fechaSalida;
    private _fechaLlegada;
    private _horaSalida;
    private _horaLlegada;
    private _precio;
    private _estado;
    private _nuevoHorario;
    constructor(id: number, avion: string, origen: string, destino: string, fechaSalida: string, fechaLlegada: string, horaSalida: string, horaLlegada: string, precio: number, estado?: EstadoVuelo, nuevoHorario?: string);
    get id(): number;
    get avion(): string;
    get origen(): string;
    get destino(): string;
    get fecha(): string;
    get hora(): string;
    get precio(): number;
    get estado(): EstadoVuelo;
    get nuevoHorario(): string;
    set id(id: number);
    set avion(avion: string);
    set origen(origen: string);
    set destino(destino: string);
    set fecha(fecha: string);
    set hora(hora: string);
    set precio(precio: number);
    set estado(estado: EstadoVuelo);
    set nuevoHorario(nuevoHorario: string);
    set horaSalida(horaSalida: string);
    set horaLlegada(horaLlegada: string);
}
export default Vuelo;
//# sourceMappingURL=Vuelo.Entity.d.ts.map