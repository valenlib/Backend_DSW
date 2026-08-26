declare class Aeropuerto {
    private id;
    private nombre;
    private ciudad;
    private pais;
    constructor(id: number, nombre: string, ciudad: string, pais: string);
    getId(): number;
    setId(id: number): void;
    getNombre(): string;
    setNombre(nombre: string): void;
    getCiudad(): string;
    setCiudad(ciudad: string): void;
    getPais(): string;
    setPais(pais: string): void;
}
export default Aeropuerto;
//# sourceMappingURL=Aeropuerto.d.ts.map