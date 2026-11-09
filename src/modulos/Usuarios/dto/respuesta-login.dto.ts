class RespuestaLoginDto {
    public id: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        email: string,
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}   
export default RespuestaLoginDto;
