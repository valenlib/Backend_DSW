class Usuario 
{
  private id: number;
  private nombre: string;
  private email: string;
  private apellido: string;
  /*static MetodoDeClase() {
    console.log("Este es un método de clase");
  }*/
  
  private constructor (id:number,nombre: string,apellido: string, email: string){
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.apellido = apellido;
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
  getEmail() {
    return this.email;
  }
  setEmail(email: string) {
    this.email = email;
  }
  getApellido() {
    return this.apellido;
  }
  setApellido(apellido: string) {
    this.apellido = apellido;
  }
}

export default Usuario;

