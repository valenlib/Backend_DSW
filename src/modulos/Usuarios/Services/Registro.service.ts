import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import Usuario from '../Entity/Usuario.entity';

export abstract class RegistroService {
  abstract registrarUsuario(
    usuario: Usuario,
  ): Promise<RespuestaRegistroDto | undefined>;
}

export default RegistroService;