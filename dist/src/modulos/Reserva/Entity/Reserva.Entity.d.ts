import type Pasaje from "./Pasaje.Entity";
import type Usuario from "../../Usuarios/Entity/Usuario.entity";
declare class Reserva {
    private _id;
    private _pasaje;
    private _pasajero;
    constructor(id: number, pasaje: Pasaje, pasajero: Usuario);
    get id(): number;
    get pasaje(): Pasaje;
    get pasajero(): Usuario;
    get vuelo(): string;
    get cantPasajes(): number;
    get precio(): number;
    get fecha(): string;
    get hora(): string;
    set id(id: number);
    set pasaje(pasaje: Pasaje);
    set pasajero(pasajero: Usuario);
    set vuelo(vuelo: string);
    set cantPasajes(cantPasajes: number);
    set fecha(fecha: string);
    set hora(hora: string);
    get precioTotal(): number;
    calcularPrecioTotal(): number;
}
export default Reserva;
//# sourceMappingURL=Reserva.Entity.d.ts.map