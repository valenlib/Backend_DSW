import RespuestaReservaDto from '../dto/respuesta-reserva.dto';
import CrearReservaDto from '../dto/crear-reserva.dto';
import ActualizarReservaDto from '../dto/actualizar-reserva.dto';
import { UserRole } from '../../../shared/JWT/AuthJWT';

export default abstract class ReservaService {
  abstract findAll(
    userId: number,
    role: UserRole,
  ): Promise<RespuestaReservaDto[]>;
  abstract findById(
    id: number,
    userId: number,
    role: UserRole,
  ): Promise<RespuestaReservaDto | undefined>;
  abstract create(
    reserva: CrearReservaDto,
    userId: number,
    role: UserRole,
  ): Promise<RespuestaReservaDto | undefined>;
  abstract update(
    id: number,
    reserva: ActualizarReservaDto,
    userId: number,
    role: UserRole,
  ): Promise<RespuestaReservaDto | undefined>;
  abstract logicalDelete(
    id: number,
    userId: number,
    role: UserRole,
  ): Promise<RespuestaReservaDto | undefined>;
  abstract delete(id: number): Promise<RespuestaReservaDto | undefined>;
}