class Aeropuerto {
    private id: number;
    private nombre: string
    private ciudad: string;
    private pais: string;
    private activo: boolean;
    constructor(
        id: number,
        nombre: string,
        ciudad: string,
        pais: string,
        activo: boolean = true,
    ) {
       
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
    getActivo() {
        return this.activo;
    }
    setActivo(activo: boolean) {
        this.activo = activo;
    }
}

export default Aeropuerto;
