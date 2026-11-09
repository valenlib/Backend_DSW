import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import Usuario from '../Entity/Usuario.entity';
export declare abstract class RegistroService {
    abstract registrarUsuario(usuario: Usuario): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroService;
//# sourceMappingURL=Registro.service.d.ts.map