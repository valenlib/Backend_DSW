class CrearVueloDto {
  constructor(
    public idAeropuertoOrigen: number,
    public idAeropuertoDestino: number,
    public fechaSalida: string,
    public fechaLlegada: string,
    public precio: number,
    public estado: "en hora" | "cancelado" | "demorado" = "en hora",
    public nuevoHorario: string | null = null,
    public horaSalida: string,
    public horaLlegada: string,
  ) {}
}

export default CrearVueloDto;
