class RespuestaAsientoDto {
    public numero: string;
    public tipo: string;
    public avion: string;
    public ocupado: boolean;

    constructor(
        numero: string,
        tipo: string,
        avion: string,
        ocupado: boolean,
    ) {
        this.numero = numero;
        this.tipo = tipo;
        this.avion = avion;
        this.ocupado = ocupado;
    }
}

export default RespuestaAsientoDto;
