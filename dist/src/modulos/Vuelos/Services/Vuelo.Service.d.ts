import RespuestaVueloDto from "../dto/respuesta-vuelo.dto.js";
import CrearVueloDto from "../dto/crear-vuelo.dto.js";
import ActualizarVueloDto from "../dto/actualizar-vuelo.dto.js";
export default abstract class VueloService {
    abstract findAll(): Promise<RespuestaVueloDto[]>;
    abstract findById(id: number): Promise<RespuestaVueloDto | undefined>;
    abstract create(vuelo: CrearVueloDto): Promise<RespuestaVueloDto | undefined>;
    abstract update(id: number, vuelo: ActualizarVueloDto): Promise<RespuestaVueloDto | undefined>;
    abstract delete(id: number): Promise<RespuestaVueloDto | undefined>;
}
//# sourceMappingURL=Vuelo.Service.d.ts.map