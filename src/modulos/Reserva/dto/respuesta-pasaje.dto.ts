class RespuestaPasajeDto {
  constructor(
    public id: number,
    public idReserva: number,
    public idVuelo: number,
    public precio: number,
    public fecha: string,
    public hora: string,
  ) {}
}

export default RespuestaPasajeDto;
