declare class Aeropuerto {
    private id;
    private nombre;
    private ciudad;
    private pais;
    private activo;
    constructor(id: number, nombre: string, ciudad: string, pais: string, activo?: boolean);
    getId(): number;
    setId(id: number): void;
    getNombre(): string;
    setNombre(nombre: string): void;
    getCiudad(): string;
    setCiudad(ciudad: string): void;
    getPais(): string;
    setPais(pais: string): void;
    getActivo(): boolean;
    setActivo(activo: boolean): void;
}
export default Aeropuerto;
//# sourceMappingURL=Aeropuerto.Entity.d.ts.map