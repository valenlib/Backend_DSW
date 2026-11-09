import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import CrearUsuarioDto from '../dto/crear-usuario.dto';
export declare abstract class RegistroService {
    abstract registrarUsuario(usuario: CrearUsuarioDto): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroService;
//# sourceMappingURL=Registro.service.d.ts.map