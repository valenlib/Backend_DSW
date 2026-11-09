class CrearVueloDto {
    constructor(
        public idAeropuertoOrigen: number,
        public idAeropuertoDestino: number,
        public fechaSalida: string,
        public fechaLlegada: string,
        public precio: number,
    ) {}
}

export default CrearVueloDto;
