import type Vuelo from '../../Vuelos/Entity/Vuelo.Entity';
declare class Pasaje {
    private _id;
    private _vuelo;
    private _precio;
    private _fecha;
    private _hora;
    constructor(id: number, vuelo: Vuelo, precio: number, fecha: string, hora: string);
    get id(): number;
    get vuelo(): Vuelo;
    get precio(): number;
    get fecha(): string;
    get hora(): string;
    set id(id: number);
    set vuelo(vuelo: Vuelo);
    set precio(precio: number);
    set fecha(fecha: string);
    set hora(hora: string);
}
export default Pasaje;
//# sourceMappingURL=Pasaje.Entity.d.ts.map