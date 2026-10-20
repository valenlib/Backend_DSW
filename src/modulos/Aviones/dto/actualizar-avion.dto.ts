class ActualizarAvionDto {
    public matricula?: string;
    public modelo?: string;
    public capacidad?: number;

    constructor(
        matricula?: string,
        modelo?: string,
        capacidad?: number,
    ) {
        this.matricula = matricula;
        this.modelo = modelo;
        this.capacidad = capacidad;
    }
}

export default ActualizarAvionDto;
