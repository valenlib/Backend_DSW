class ActualizarReservaDto {
    constructor(
        public idVuelo?: number,
        public idUsuario?: number,
        public cantidadPasajes?: number,
    ) {}
}

export default ActualizarReservaDto;
