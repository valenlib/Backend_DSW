class CrearUsuarioDto {
    public nombre: string;
    public email: string;
    public password: string;

    constructor(
        nombre: string,
        email: string,
        password: string,
    ) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}  
export default CrearUsuarioDto;