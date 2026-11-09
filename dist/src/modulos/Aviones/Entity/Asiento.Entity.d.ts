declare class Asiento {
    private numero;
    private tipo;
    private avion;
    private ocupado;
    constructor(numero: string, tipo: string, avion: string, ocupado: boolean);
    getNumero(): string;
    setNumero(numero: string): void;
    getTipo(): string;
    setTipo(tipo: string): void;
    getAvion(): string;
    setAvion(avion: string): void;
    getOcupado(): boolean;
    setOcupado(ocupado: boolean): void;
}
export default Asiento;
//# sourceMappingURL=Asiento.Entity.d.ts.map