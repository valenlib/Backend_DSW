import ActualizarPerfilDto from '../dto/actualizar-perfil.dto';
import DeletePerfilDto from '../dto/delete-perfil.dto';
import LogicalDeletePerfilDto from '../dto/logical-delete-perfil.dto';
import RespuestaPerfilDto from '../dto/respuesta-perfil.dto';
export declare abstract class PerfilService {
    abstract actualizarPerfil(perfilRequest: ActualizarPerfilDto): Promise<RespuestaPerfilDto | undefined>;
    abstract logicalDelete(perfilRequest: LogicalDeletePerfilDto): Promise<RespuestaPerfilDto | undefined>;
    abstract delete(perfilRequest: DeletePerfilDto): Promise<RespuestaPerfilDto | undefined>;
}
export default PerfilService;
//# sourceMappingURL=Perfil.Service.d.ts.map