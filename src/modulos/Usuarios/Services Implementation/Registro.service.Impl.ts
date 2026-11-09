import RegistroService from '../Services/Registro.service';
import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import CrearUsuarioDto from '../dto/crear-usuario.dto';

export class RegistroServiceImpl extends RegistroService {
  async registrarUsuario(
    usuario: CrearUsuarioDto,
  ): Promise<RespuestaRegistroDto | undefined> {
    return undefined;
  }
}

export default RegistroServiceImpl;