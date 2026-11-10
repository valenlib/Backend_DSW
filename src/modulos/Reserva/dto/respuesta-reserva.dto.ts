class RespuestaReservaDto {
  constructor(
    public id: number,
    public idVuelo: number,
    public nombrePasajero: string,
    public emailPasajero: string,
    public cantidadPasajes: number,
    public precioTotal: number,
    public estado: "pendiente" | "confirmada" | "cancelada",
  ) {}
}

export default RespuestaReservaDto;
