import AdminService, { UsuarioUpdate } from "../Services/Admin.Service.js";
import RespuestaAdminDto from "../dto/respuesta-admin.dto.js";
export declare class AdminServiceImpl extends AdminService {
    findAll(): Promise<RespuestaAdminDto[]>;
    findById(id: number): Promise<RespuestaAdminDto | undefined>;
    findByCriterio(criterio: string): Promise<RespuestaAdminDto[]>;
    update(id: number, usuario: UsuarioUpdate): Promise<RespuestaAdminDto | undefined>;
    logicalDelete(id: number): Promise<RespuestaAdminDto | undefined>;
    delete(id: number): Promise<RespuestaAdminDto | undefined>;
}
export default AdminServiceImpl;
//# sourceMappingURL=Admin.Service.Impl.d.ts.map