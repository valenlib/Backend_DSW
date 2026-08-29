class ActualizarVueloDto {
    constructor(
        id: number,
        avion?: string,
        origen?: string,
        destino?: string,
        fecha?: string,
        hora?: string,
        precio?: number
    ) {}
}

export default ActualizarVueloDto;
