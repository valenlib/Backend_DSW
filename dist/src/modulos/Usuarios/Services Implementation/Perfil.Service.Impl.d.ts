import PerfilService from '../Services/Perfil.Service';
import ActualizarPerfilDto from '../dto/actualizar-perfil.dto';
import DeletePerfilDto from '../dto/delete-perfil.dto';
import LogicalDeletePerfilDto from '../dto/logical-delete-perfil.dto';
import RespuestaPerfilDto from '../dto/respuesta-perfil.dto';
export declare class PerfilServiceImpl extends PerfilService {
    actualizarPerfil(perfilRequest: ActualizarPerfilDto): Promise<RespuestaPerfilDto | undefined>;
    logicalDelete(perfilRequest: LogicalDeletePerfilDto): Promise<RespuestaPerfilDto | undefined>;
    delete(perfilRequest: DeletePerfilDto): Promise<RespuestaPerfilDto | undefined>;
}
export default PerfilServiceImpl;
//# sourceMappingURL=Perfil.Service.Impl.d.ts.map