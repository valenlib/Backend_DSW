import PasajeService from "../Services/Pasaje.Service.js";
import CrearPasajeDto from "../dto/crear-pasaje.dto.js";
import ActualizarPasajeDto from "../dto/actualizar-pasaje.dto.js";
import RespuestaPasajeDto from "../dto/respuesta-pasaje.dto.js";
export default class PasajeServiceImpl extends PasajeService {
    private toDto;
    private findById;
    create(pasaje: CrearPasajeDto): Promise<RespuestaPasajeDto | undefined>;
    update(id: number, pasaje: ActualizarPasajeDto): Promise<RespuestaPasajeDto | undefined>;
    delete(id: number): Promise<RespuestaPasajeDto | undefined>;
}
//# sourceMappingURL=Pasaje.Service.Impl.d.ts.map