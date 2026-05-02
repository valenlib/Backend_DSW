class Aeropuerto {
    constructor(id, nombre, ciudad, pais) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pais = pais;
    }
    //setters y getters
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getCiudad() {
        return this.ciudad;
    }
    setCiudad(ciudad) {
        this.ciudad = ciudad;
    }
    getPais() {
        return this.pais;
    }
    setPais(pais) {
        this.pais = pais;
    }
}
module.exports = Aeropuerto;
export default Aeropuerto;
