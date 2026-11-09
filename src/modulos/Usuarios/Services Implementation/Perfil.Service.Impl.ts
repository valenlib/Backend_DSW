import PerfilService from "../Services/Perfil.Service.js";
import ActualizarPerfilDto from "../dto/actualizar-perfil.dto.js";
import DeletePerfilDto from "../dto/delete-perfil.dto.js";
import LogicalDeletePerfilDto from "../dto/logical-delete-perfil.dto.js";
import RespuestaPerfilDto from "../dto/respuesta-perfil.dto.js";

export class PerfilServiceImpl extends PerfilService {
  async actualizarPerfil(
    perfilRequest: ActualizarPerfilDto,
  ): Promise<RespuestaPerfilDto | undefined> {
    return undefined;
  }

  async logicalDelete(
    perfilRequest: LogicalDeletePerfilDto,
  ): Promise<RespuestaPerfilDto | undefined> {
    return undefined;
  }

  async delete(
    perfilRequest: DeletePerfilDto,
  ): Promise<RespuestaPerfilDto | undefined> {
    return undefined;
  }
}

export default PerfilServiceImpl;
