class Usuario 
{
  private id: number;
  private nombre: string;
  private email: string;
  private apellido: string;
  private password?: string;
  /*static MetodoDeClase() {
    console.log("Este es un método de clase");
  }*/
  
  private constructor (
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password?: string
  ){
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.apellido = apellido;
    this.password = password;
  }
  //setters y getters
  getId(): number {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
  getNombre(): string {
    return this.nombre;
  }
  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(email: string) {
    this.email = email;
  }
  getApellido(): string {
    return this.apellido;
  }
  setApellido(apellido: string) {
    this.apellido = apellido;
  }
  getPassword(): string | undefined {
    return this.password;
  }
  setPassword(password: string | undefined): void {
    this.password = password;
  }
}

export default Usuario;
