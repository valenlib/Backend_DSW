class ActualizarPasajeDto {
  constructor(
    public idReserva?: number,
    public idVuelo?: number,
    public precio?: number,
    public fecha?: string,
    public hora?: string,
  ) {}
}

export default ActualizarPasajeDto;
