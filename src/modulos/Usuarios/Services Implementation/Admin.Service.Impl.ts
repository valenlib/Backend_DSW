import AdminService from '../Services/Admin.Service';
import RespuestaAdminDto from '../dto/respuesta-admin.dto';
import Usuario from '../Entity/Usuario.entity';

export class AdminServiceImpl extends AdminService {
  async findAll(): Promise<RespuestaAdminDto | undefined> {
    return undefined;
  }

  async findById(id: number): Promise<RespuestaAdminDto | undefined> {
    return undefined;
  }

  async findByCriterio(
    criterio: string,
  ): Promise<RespuestaAdminDto | undefined> {
    return undefined;
  }

  async update(
    id: number,
    usuario: Usuario,
  ): Promise<RespuestaAdminDto | undefined> {
    return undefined;
  }

  async delete(id: number): Promise<RespuestaAdminDto | undefined> {
    return undefined;
  }
}

export default AdminServiceImpl;