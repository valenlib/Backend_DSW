class RespuestaAdminDto {
  public id: number;
  public nombre: string;
  public apellido: string;
  public email: string;
  public rol: "admin" | "usuario";

  constructor(id: number, nombre: string, apellido: string, email: string, rol: "admin" | "usuario") {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.rol = rol;
  }
}
export default RespuestaAdminDto;
