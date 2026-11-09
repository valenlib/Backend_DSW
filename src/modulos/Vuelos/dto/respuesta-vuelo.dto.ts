class RespuestaVueloDto {
    constructor(
        public id: number,
        public idAeropuertoOrigen: number,
        public idAeropuertoDestino: number,
        public fechaSalida: string,
        public fechaLlegada: string,
        public precio: number,
        public estado: string,
        public nuevoHorario: string | null,
    ) {}
}

export default RespuestaVueloDto;
