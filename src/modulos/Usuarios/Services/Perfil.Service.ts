import ActualizarPerfilDto from "../dto/actualizar-perfil.dto.js";
import DeletePerfilDto from "../dto/delete-perfil.dto.js";
import LogicalDeletePerfilDto from "../dto/logical-delete-perfil.dto.js";
import RespuestaPerfilDto from "../dto/respuesta-perfil.dto.js";
export abstract class PerfilService {
  abstract actualizarPerfil(
    perfilRequest: ActualizarPerfilDto,
  ): Promise<RespuestaPerfilDto | undefined>;
  abstract logicalDelete(
    perfilRequest: LogicalDeletePerfilDto,
  ): Promise<RespuestaPerfilDto | undefined>;
  abstract delete(
    perfilRequest: DeletePerfilDto,
  ): Promise<RespuestaPerfilDto | undefined>;
}
export default PerfilService;
