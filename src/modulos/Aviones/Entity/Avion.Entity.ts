class Avion {
  private matricula: string;
  private modelo: string;
  private capacidad!: number;
  
  constructor(matricula: string, modelo: string, capacidad: number) {
    this.matricula = matricula;
    this.modelo = modelo;
    this.setCapacidad(capacidad);
  }
  
  setCapacidad(capacidad: number) {
    if (capacidad < 0) {
      throw new Error("La capacidad no puede ser negativa");
    }
    this.capacidad = capacidad;
  }

  getMatricula(): string {
    return this.matricula;
  }

  setMatricula(matricula: string): void {
    this.matricula = matricula;
  }

  getModelo(): string {
    return this.modelo;
  }

  setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  getCapacidad(): number {
    return this.capacidad;
  }

  obtenerInfo(): string {
    return `${this.matricula} ${this.modelo}  (${this.capacidad} pasajeros)`;
  }

  
}


export default Avion;
