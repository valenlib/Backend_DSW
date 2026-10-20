class RespuestaRegistroDto {
    public id: number;
    public nombre: string;
    public email: string;

    constructor(
        id: number,
        nombre: string,
        email: string,
    ) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
}
export default RespuestaRegistroDto;
