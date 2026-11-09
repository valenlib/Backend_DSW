declare class ActualizarVueloDto {
    idAeropuertoOrigen?: number | undefined;
    idAeropuertoDestino?: number | undefined;
    fechaSalida?: string | undefined;
    fechaLlegada?: string | undefined;
    precio?: number | undefined;
    estado?: "en hora" | "cancelado" | "demorado" | undefined;
    nuevoHorario?: string | undefined;
    constructor(idAeropuertoOrigen?: number | undefined, idAeropuertoDestino?: number | undefined, fechaSalida?: string | undefined, fechaLlegada?: string | undefined, precio?: number | undefined, estado?: "en hora" | "cancelado" | "demorado" | undefined, nuevoHorario?: string | undefined);
}
export default ActualizarVueloDto;
//# sourceMappingURL=actualizar-vuelo.dto.d.ts.map