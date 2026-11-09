import PerfilService from "../Services/Perfil.Service.js";
import ActualizarPerfilDto from "../dto/actualizar-perfil.dto.js";
import DeletePerfilDto from "../dto/delete-perfil.dto.js";
import LogicalDeletePerfilDto from "../dto/logical-delete-perfil.dto.js";
import RespuestaPerfilDto from "../dto/respuesta-perfil.dto.js";
export declare class PerfilServiceImpl extends PerfilService {
    actualizarPerfil(perfilRequest: ActualizarPerfilDto): Promise<RespuestaPerfilDto | undefined>;
    logicalDelete(perfilRequest: LogicalDeletePerfilDto): Promise<RespuestaPerfilDto | undefined>;
    delete(perfilRequest: DeletePerfilDto): Promise<RespuestaPerfilDto | undefined>;
}
export default PerfilServiceImpl;
//# sourceMappingURL=Perfil.Service.Impl.d.ts.map