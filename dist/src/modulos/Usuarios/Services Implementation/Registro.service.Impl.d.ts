import RegistroService from '../Services/Registro.service';
import RespuestaRegistroDto from '../dto/respuesta-registro.dto';
import Usuario from '../Entity/Usuario.entity';
export declare class RegistroServiceImpl extends RegistroService {
    registrarUsuario(usuario: Usuario): Promise<RespuestaRegistroDto | undefined>;
}
export default RegistroServiceImpl;
//# sourceMappingURL=Registro.service.Impl.d.ts.map