class CrearAsientoTipoDto {
    public nombre: string;
    public descripcion: string;
    public precioExtra: number;

    constructor(
        nombre: string,
        descripcion: string,
        precioExtra: number,
    ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioExtra = precioExtra;
    }
}

export default CrearAsientoTipoDto;
