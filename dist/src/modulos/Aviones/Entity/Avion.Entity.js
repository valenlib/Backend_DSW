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
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getCapacidad() {
        return this.capacidad;
    }
    obtenerInfo() {
        return `${this.matricula} ${this.modelo}  (${this.capacidad} pasajeros)`;
    }
}
export default Avion;
//# sourceMappingURL=Avion.Entity.js.map