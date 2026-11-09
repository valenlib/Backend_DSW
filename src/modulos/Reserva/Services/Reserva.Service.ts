import RespuestaReservaDto from '../dto/respuesta-reserva.dto';
import CrearReservaDto from '../dto/crear-reserva.dto';
import ActualizarReservaDto from '../dto/actualizar-reserva.dto';

export default abstract class ReservaService {
  abstract findAll(): Promise<RespuestaReservaDto[]>;
  abstract findById(id: number): Promise<RespuestaReservaDto | undefined>;
  abstract create(
    reserva: CrearReservaDto,
  ): Promise<RespuestaReservaDto | undefined>;
  abstract update(
    id: number,
    reserva: ActualizarReservaDto,
  ): Promise<RespuestaReservaDto | undefined>;
  abstract logicalDelete(id: number): Promise<RespuestaReservaDto | undefined>;
  abstract delete(id: number): Promise<RespuestaReservaDto | undefined>;
}