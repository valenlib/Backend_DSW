class CrearVueloDto {
    constructor(idAeropuertoOrigen, idAeropuertoDestino, fechaSalida, fechaLlegada, precio, estado = "en hora", nuevoHorario = null, horaSalida, horaLlegada) {
        this.idAeropuertoOrigen = idAeropuertoOrigen;
        this.idAeropuertoDestino = idAeropuertoDestino;
        this.fechaSalida = fechaSalida;
        this.fechaLlegada = fechaLlegada;
        this.precio = precio;
        this.estado = estado;
        this.nuevoHorario = nuevoHorario;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
    }
}
export default CrearVueloDto;
//# sourceMappingURL=crear-vuelo.dto.js.map