import RespuestaAdminDto from '../dto/respuesta-admin.dto';
import Usuario from '../Entity/Usuario.entity';

export abstract class AdminService {
  abstract findAll(): Promise<RespuestaAdminDto | undefined>;

  abstract findById(id: number): Promise<RespuestaAdminDto | undefined>;

  abstract findByCriterio(
    criterio: string,
  ): Promise<RespuestaAdminDto | undefined>;

  abstract update(
    id: number,
    usuario: Usuario,
  ): Promise<RespuestaAdminDto | undefined>;

  abstract delete(id: number): Promise<RespuestaAdminDto | undefined>;
}

export default AdminService;