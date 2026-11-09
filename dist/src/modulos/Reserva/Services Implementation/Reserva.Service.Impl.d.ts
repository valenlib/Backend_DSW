import ReservaService from '../Services/Reserva.Service';
import RespuestaReservaDto from '../dto/respuesta-reserva.dto';
import CrearReservaDto from '../dto/crear-reserva.dto';
import ActualizarReservaDto from '../dto/actualizar-reserva.dto';
import { UserRole } from '../../../shared/JWT/AuthJWT';
export default class ReservaServiceImpl extends ReservaService {
    private readonly selectQuery;
    private toDto;
    findAll(userId: number, role: UserRole): Promise<RespuestaReservaDto[]>;
    findById(id: number, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    findByEmail(email: string): Promise<RespuestaReservaDto[] | undefined>;
    create(reserva: CrearReservaDto, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    update(id: number, reserva: ActualizarReservaDto, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    logicalDelete(id: number, userId: number, role: UserRole): Promise<RespuestaReservaDto | undefined>;
    delete(id: number): Promise<RespuestaReservaDto | undefined>;
}
//# sourceMappingURL=Reserva.Service.Impl.d.ts.map