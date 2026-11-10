declare class RespuestaReservaDto {
    id: number;
    idVuelo: number;
    nombrePasajero: string;
    emailPasajero: string;
    cantidadPasajes: number;
    precioTotal: number;
    estado: "pendiente" | "confirmada" | "cancelada";
    constructor(id: number, idVuelo: number, nombrePasajero: string, emailPasajero: string, cantidadPasajes: number, precioTotal: number, estado: "pendiente" | "confirmada" | "cancelada");
}
export default RespuestaReservaDto;
//# sourceMappingURL=respuesta-reserva.dto.d.ts.map