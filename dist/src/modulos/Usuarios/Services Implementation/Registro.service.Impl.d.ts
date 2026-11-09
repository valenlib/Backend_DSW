import RegistroService from '../Services/Registro.service';
import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import CrearUsuarioDto from '../dto/crear-usuario.dto';
export declare class RegistroServiceImpl extends RegistroService {
    registrarUsuario(usuario: CrearUsuarioDto): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroServiceImpl;
//# sourceMappingURL=Registro.service.Impl.d.ts.map