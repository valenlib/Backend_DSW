import VueloService from '../Services/Vuelo.Service';
import CrearVueloDto from '../dto/crear-vuelo.dto';
import ActualizarVueloDto from '../dto/actualizar-vuelo.dto';
import RespuestaVueloDto from '../dto/respuesta-vuelo.dto';
export default class VueloServiceImpl extends VueloService {
    private readonly selectQuery;
    private toDto;
    findAll(): Promise<RespuestaVueloDto[]>;
    findById(id: number): Promise<RespuestaVueloDto | undefined>;
    private findByIdIncludingCancelled;
    create(vuelo: CrearVueloDto): Promise<RespuestaVueloDto | undefined>;
    update(id: number, vuelo: ActualizarVueloDto): Promise<RespuestaVueloDto | undefined>;
    delete(id: number): Promise<RespuestaVueloDto | undefined>;
}
//# sourceMappingURL=Vuelo.Service.Impl.d.ts.map