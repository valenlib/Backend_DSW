class CrearUsuarioDto {
  public nombre: string;
  public apellido: string;
  public email: string;
  public password: string;

  constructor(
    nombre: string,
    apellido: string,
    email: string,
    password: string,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
  }
}
export default CrearUsuarioDto;
