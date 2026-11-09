declare class CrearVueloDto {
    idAeropuertoOrigen: number;
    idAeropuertoDestino: number;
    fechaSalida: string;
    fechaLlegada: string;
    precio: number;
    estado: "en hora" | "cancelado" | "demorado";
    nuevoHorario: string | null;
    horaSalida: string;
    horaLlegada: string;
    constructor(idAeropuertoOrigen: number, idAeropuertoDestino: number, fechaSalida: string, fechaLlegada: string, precio: number, estado: "en hora" | "cancelado" | "demorado" | undefined, nuevoHorario: string | null | undefined, horaSalida: string, horaLlegada: string);
}
export default CrearVueloDto;
//# sourceMappingURL=crear-vuelo.dto.d.ts.map