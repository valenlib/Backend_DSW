class CrearReservaDto {
    constructor(
        public idVuelo: number,
        public idUsuario: number,
        public cantidadPasajes: number,
    ) {}
}

export default CrearReservaDto;
