import RegistroService from "../Services/Registro.service.js";
import RespuestaRegistroDto from "../dto/respuesta-registro.dto.js";
import CrearUsuarioDto from "../dto/crear-usuario.dto.js";
export declare class RegistroServiceImpl extends RegistroService {
    registrarUsuario(usuario: CrearUsuarioDto): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroServiceImpl;
//# sourceMappingURL=Registro.service.Impl.d.ts.map