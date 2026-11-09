import AeropuertoService from "../Services/Aeropuerto.Service.js";
import CrearAeropuertoDto from "../dto/crear-aeropuerto.dto.js";
import ActualizarAeropuertoDto from "../dto/actualizar-aeropuerto.dto.js";
import RespuestaAeropuertoDto from "../dto/respuesta-aeropuerto.dto.js";
export default class AeropuertoServiceImpl extends AeropuertoService {
    private toDto;
    findAll(): Promise<RespuestaAeropuertoDto[]>;
    findById(id: number): Promise<RespuestaAeropuertoDto | undefined>;
    create(aeropuerto: CrearAeropuertoDto): Promise<RespuestaAeropuertoDto | undefined>;
    update(id: number, aeropuerto: ActualizarAeropuertoDto): Promise<RespuestaAeropuertoDto | undefined>;
    logicalDelete(id: number): Promise<RespuestaAeropuertoDto | undefined>;
    delete(id: number): Promise<RespuestaAeropuertoDto | undefined>;
}
//# sourceMappingURL=Aeropuerto.Service.Impl.d.ts.map