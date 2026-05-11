class Aeropuerto {
    private id: number;
    private nombre: string
    private ciudad: string;
    private pais: string;
    constructor(id: number, nombre: string, ciudad: string, pais: string) {
       
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pais = pais;
    }
    //setters y getters
    getId() {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    getCiudad() {
        return this.ciudad;
    }
    setCiudad(ciudad: string) {
        this.ciudad = ciudad;
    }
    getPais() {
        return this.pais;
    }
    setPais(pais: string) {
        this.pais = pais;
    }
}

export default Aeropuerto;
