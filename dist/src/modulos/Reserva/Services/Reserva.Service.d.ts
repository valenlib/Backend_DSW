import RespuestaReservaDto from "../dto/respuesta-reserva.dto.js";
import CrearReservaDto from "../dto/crear-reserva.dto.js";
import ActualizarReservaDto from "../dto/actualizar-reserva.dto.js";
import { UserRole } from "../../../shared/JWT/AuthJWT.js";
export default abstract class ReservaService {
    abstract findAll(userId: number, role: UserRole): Promise<RespuestaReservaDto[]>;
    abstract findById(id: number, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    abstract findByEmail(email: string): Promise<RespuestaReservaDto[] | undefined>;
    abstract create(reserva: CrearReservaDto, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    abstract update(id: number, reserva: ActualizarReservaDto, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    abstract logicalDelete(id: number, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    abstract delete(id: number, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
}
//# sourceMappingURL=Reserva.Service.d.ts.map