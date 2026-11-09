class Aeropuerto {
    constructor(id, nombre, ciudad, pais, activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pais = pais;
        this.activo = activo;
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
    getActivo() {
        return this.activo;
    }
    setActivo(activo) {
        this.activo = activo;
    }
}
export default Aeropuerto;
//# sourceMappingURL=Aeropuerto.Entity.js.map