class Usuario 
{
  id;
  #nombre;
  #email;
  /*static MetodoDeClase() {
    console.log("Este es un método de clase");
  }*/
  constructor (id,nombre, email){
    this.id = id;
    this.#nombre = nombre;
    this.#email = email;
  }
  //setters y getters
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getEmail() {
    return this.#email;
  }
  setEmail(email) {
    this.#email = email;
  }

}
//usar actualinvestigar sobre export default y module.exports

module.exports = Usuario;
export default Usuario;

