import PerfilService from '../Services/Perfil.Service';
import ActualizarPerfilDto from '../dto/actualizar-perfil.dto';
import DeletePerfilDto from '../dto/delete-perfil.dto';
import LogicalDeletePerfilDto from '../dto/logical-delete-perfil.dto';
import RespuestaPerfilDto from '../dto/respuesta-perfil.dto';

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