declare class vuelo {
    private _id;
    private _avion;
    private _origen;
    private _destino;
    private _fecha;
    private _hora;
    private _precio;
    constructor(id: number, avion: string, origen: string, destino: string, fecha: string, hora: string, precio: number);
    get id(): number;
    get avion(): string;
    get origen(): string;
    get destino(): string;
    get fecha(): string;
    get hora(): string;
    get precio(): number;
    set id(id: number);
    set avion(avion: string);
    set origen(origen: string);
    set destino(destino: string);
    set fecha(fecha: string);
    set hora(hora: string);
    set precio(precio: number);
}
export default vuelo;
//# sourceMappingURL=Vuelo.d.ts.map