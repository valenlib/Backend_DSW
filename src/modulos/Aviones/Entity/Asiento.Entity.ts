class Asiento {
  private numero: string;
  private tipo: string;
  private avion: string;
  private ocupado: boolean;

  constructor(
    numero: string,
    tipo: string,
    avion: string,
    ocupado: boolean,
  ) {
    this.numero = numero;
    this.tipo = tipo;
    this.avion = avion;
    this.ocupado = ocupado;
  }

  getNumero(): string {
    return this.numero;
  }

  setNumero(numero: string): void {
    this.numero = numero;
  }

  getTipo(): string {
    return this.tipo;
  }

  setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  getAvion(): string {
    return this.avion;
  }

  setAvion(avion: string): void {
    this.avion = avion;
  }

  getOcupado(): boolean {
    return this.ocupado;
  }

  setOcupado(ocupado: boolean): void {
    this.ocupado = ocupado;
  }
}

export default Asiento;