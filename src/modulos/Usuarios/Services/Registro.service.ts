import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import CrearUsuarioDto from '../dto/crear-usuario.dto';

export abstract class RegistroService {
  abstract registrarUsuario(
    usuario: CrearUsuarioDto,
  ): Promise<RespuestaRegistroDto | undefined>;
}

export default RegistroService;