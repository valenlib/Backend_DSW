import type Pasaje from "./Pasaje";
declare class Reserva {
    private _id;
    private _pasaje;
    private _pasajero;
    constructor(id: number, pasaje: Pasaje, pasajero: Pasajero);
    get id(): number;
    get pasaje(): Pasaje;
    get pasajero(): Pasajero;
    get vuelo(): string;
    get cantPasajes(): number;
    get precio(): number;
    get fecha(): string;
    get hora(): string;
    set id(id: number);
    set pasaje(pasaje: Pasaje);
    set pasajero(pasajero: Pasajero);
    set vuelo(vuelo: string);
    set cantPasajes(cantPasajes: number);
    set fecha(fecha: string);
    set hora(hora: string);
    get precioTotal(): number;
    calcularPrecioTotal(): number;
}
export default Reserva;
//# sourceMappingURL=Reserva.d.ts.map