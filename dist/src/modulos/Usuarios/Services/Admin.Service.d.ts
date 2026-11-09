import RespuestaAdminDto from "../dto/respuesta-admin.dto.js";
export type UsuarioUpdate = {
    nombre?: string;
    apellido?: string;
    email?: string;
};
export declare abstract class AdminService {
    abstract findAll(): Promise<RespuestaAdminDto[]>;
    abstract findById(id: number): Promise<RespuestaAdminDto | undefined>;
    abstract findByCriterio(criterio: string): Promise<RespuestaAdminDto[]>;
    abstract update(id: number, usuario: UsuarioUpdate): Promise<RespuestaAdminDto | undefined>;
    abstract logicalDelete(id: number): Promise<RespuestaAdminDto | undefined>;
    abstract delete(id: number): Promise<RespuestaAdminDto | undefined>;
}
export default AdminService;
//# sourceMappingURL=Admin.Service.d.ts.map