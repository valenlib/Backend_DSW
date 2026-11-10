import CrearPasajeDto from "../dto/crear-pasaje.dto.js";
import ActualizarPasajeDto from "../dto/actualizar-pasaje.dto.js";
import RespuestaPasajeDto from "../dto/respuesta-pasaje.dto.js";

export default abstract class PasajeService {
  abstract create(
    pasaje: CrearPasajeDto,
  ): Promise<RespuestaPasajeDto | undefined>;
  abstract update(
    id: number,
    pasaje: ActualizarPasajeDto,
  ): Promise<RespuestaPasajeDto | undefined>;
  abstract delete(id: number): Promise<RespuestaPasajeDto | undefined>;
}