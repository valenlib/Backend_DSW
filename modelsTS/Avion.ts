class Avion {
  private matricula: string;
  private modelo: string
  private capacidad: number;
  
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

  obtenerInfo() {
    return `${this.matricula} ${this.modelo}  (${this.capacidad} pasajeros)`;
  }

  
}


export default Avion;
