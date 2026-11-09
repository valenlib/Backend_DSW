declare class Avion {
    private matricula;
    private modelo;
    private capacidad;
    constructor(matricula: string, modelo: string, capacidad: number);
    setCapacidad(capacidad: number): void;
    getMatricula(): string;
    setMatricula(matricula: string): void;
    getModelo(): string;
    setModelo(modelo: string): void;
    getCapacidad(): number;
    obtenerInfo(): string;
}
export default Avion;
//# sourceMappingURL=Avion.Entity.d.ts.map