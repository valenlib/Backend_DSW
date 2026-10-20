import RegistroService from '../Services/Registro.service';
import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import Usuario from '../Entity/Usuario.entity';

export class RegistroServiceImpl extends RegistroService {
  async registrarUsuario(
    usuario: Usuario,
  ): Promise<RespuestaRegistroDto | undefined> {
    return undefined;
  }
}

export default RegistroServiceImpl;