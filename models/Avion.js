class Avion {
  constructor(matricula, modelo, capacidad) {
    this.matricula = matricula;
    this.modelo = modelo;
    this.setCapacidad(capacidad);
  }
  
  setCapacidad(capacidad) {
    if (capacidad < 0) {
      throw new Error("La capacidad no puede ser negativa");
    }
    this.capacidad = capacidad;
  }

  obtenerInfo() {
    return `${this.matricula} ${this.modelo}  (${this.capacidad} pasajeros)`;
  }

  
}

module.exports = Avion;