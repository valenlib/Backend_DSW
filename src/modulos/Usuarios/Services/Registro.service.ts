import RespuestaRegistroDto from "../dto/respuesta-registro.dto.js";
import CrearUsuarioDto from "../dto/crear-usuario.dto.js";
export abstract class RegistroService {
  abstract registrarUsuario(
    usuario: CrearUsuarioDto,
  ): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroService;
