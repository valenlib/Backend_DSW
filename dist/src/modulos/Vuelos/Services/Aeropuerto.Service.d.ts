import RespuestaAeropuertoDto from '../dto/respuesta-aeropuerto.dto';
import CrearAeropuertoDto from '../dto/crear-aeropuerto.dto';
import ActualizarAeropuertoDto from '../dto/actualizar-aeropuerto.dto';
export default abstract class AeropuertoService {
    abstract findAll(): Promise<RespuestaAeropuertoDto[]>;
    abstract findById(id: number): Promise<RespuestaAeropuertoDto | undefined>;
    abstract create(aeropuerto: CrearAeropuertoDto): Promise<RespuestaAeropuertoDto | undefined>;
    abstract update(id: number, aeropuerto: ActualizarAeropuertoDto): Promise<RespuestaAeropuertoDto | undefined>;
    abstract logicalDelete(id: number): Promise<RespuestaAeropuertoDto | undefined>;
    abstract delete(id: number): Promise<RespuestaAeropuertoDto | undefined>;
}
//# sourceMappingURL=Aeropuerto.Service.d.ts.map