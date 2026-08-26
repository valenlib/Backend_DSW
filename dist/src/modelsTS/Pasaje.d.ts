declare class Pasaje {
    private _id;
    private _precio;
    private _fecha;
    private _hora;
    private _origen;
    private _destino;
    constructor(id: number, precio: number, fecha: string, hora: string, origen: string, destino: string);
    get id(): number;
    get precio(): number;
    get fecha(): string;
    get hora(): string;
    get origen(): string;
    get destino(): string;
    set id(id: number);
    set precio(precio: number);
    set fecha(fecha: string);
    set hora(hora: string);
    set origen(origen: string);
    set destino(destino: string);
}
export default Pasaje;
//# sourceMappingURL=Pasaje.d.ts.map