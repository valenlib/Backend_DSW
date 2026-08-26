class Usuario {
    /*static MetodoDeClase() {
      console.log("Este es un método de clase");
    }*/
    constructor(id, nombre, apellido, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.apellido = apellido;
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
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
}
export default Usuario;
//# sourceMappingURL=Usuario.js.map