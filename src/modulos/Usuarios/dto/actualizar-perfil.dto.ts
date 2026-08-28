class ActualizarPerfilDto {
  constructor(
    public id: number,
    public nombre?: string,
    public apellido?: string,
    public email?: string
  ) {}
}

export default ActualizarPerfilDto;