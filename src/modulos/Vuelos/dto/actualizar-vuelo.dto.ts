class ActualizarVueloDto {
    constructor(
        public idAeropuertoOrigen?: number,
        public idAeropuertoDestino?: number,
        public fechaSalida?: string,
        public fechaLlegada?: string,
        public precio?: number,
        public estado?: 'en hora' | 'atrasado' | 'demorado',
        public nuevoHorario?: string,
    ) {}
}

export default ActualizarVueloDto;
