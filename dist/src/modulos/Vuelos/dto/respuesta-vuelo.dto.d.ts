declare class RespuestaVueloDto {
    id: number;
    idAeropuertoOrigen: number;
    idAeropuertoDestino: number;
    origen: string;
    destino: string;
    fechaSalida: string;
    fechaLlegada: string;
    precio: number;
    estado: string;
    nuevoHorario: string | null;
    constructor(id: number, idAeropuertoOrigen: number, idAeropuertoDestino: number, origen: string, destino: string, fechaSalida: string, fechaLlegada: string, precio: number, estado: string, nuevoHorario: string | null);
}
export default RespuestaVueloDto;
//# sourceMappingURL=respuesta-vuelo.dto.d.ts.map