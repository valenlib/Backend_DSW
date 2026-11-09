import AdminService from '../Services/Admin.Service';
import RespuestaAdminDto from '../dto/respuesta-admin.dto';
import Usuario from '../Entity/Usuario.entity';
export declare class AdminServiceImpl extends AdminService {
    findAll(): Promise<RespuestaAdminDto[]>;
    findById(id: number): Promise<RespuestaAdminDto | undefined>;
    findByCriterio(criterio: string): Promise<RespuestaAdminDto[]>;
    update(id: number, usuario: Usuario): Promise<RespuestaAdminDto | undefined>;
    delete(id: number): Promise<RespuestaAdminDto | undefined>;
}
export default AdminServiceImpl;
//# sourceMappingURL=Admin.Service.Impl.d.ts.map