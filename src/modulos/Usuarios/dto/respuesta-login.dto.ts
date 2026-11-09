class RespuestaLoginDto {
  public id: number;
  public nombre: string;
  public apellido: string;
  public email: string;
  public rol: "admin" | "usuario";
  public accessToken: string;
  public refreshToken: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    rol: "admin" | "usuario",
    accessToken: string,
    refreshToken: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.rol = rol;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
export default RespuestaLoginDto;
