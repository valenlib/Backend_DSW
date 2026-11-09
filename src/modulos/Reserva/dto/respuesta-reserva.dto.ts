class RespuestaReservaDto {
    constructor(
        public id: number,
        public idViaje: number,
        public nombrePasajero: string,
        public emailPasajero: string,
        public cantidadPasajes: number,
        public precioTotal: number,
    ) {}
}

export default RespuestaReservaDto;
