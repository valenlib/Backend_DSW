import RespuestaRegistroDto from "../dto/respuesta-registro.dto.js";
import CrearUsuarioDto from "../dto/crear-usuario.dto.js";
export declare abstract class RegistroService {
    abstract registrarUsuario(usuario: CrearUsuarioDto): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroService;
//# sourceMappingURL=Registro.service.d.ts.map