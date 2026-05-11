class Usuario 
{
  private id: number;
  private nombre: string;
  private email: string;

  /*static MetodoDeClase() {
    console.log("Este es un método de clase");
  }*/
  
  private constructor (id:number,nombre: string, email: string){
    this.id = id;
    this.nombre = nombre;
    this.email = email;
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

}

export default Usuario;

