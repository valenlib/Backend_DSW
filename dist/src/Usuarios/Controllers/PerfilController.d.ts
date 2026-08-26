import { PerfilService } from './perfil.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
import { LogicalDeletePerfilDto } from './dto/logical-delete-perfil.dto';
import { DeletePerfilDto } from './dto/delete-perfil.dto';
import { RespuestaPerfilDto } from './dto/respuesta-perfil.dto';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    actualizarPerfil(perfilRequest: ActualizarPerfilDto): Promise<RespuestaPerfilDto>;
    logicalDelete(perfilRequest: LogicalDeletePerfilDto): Promise<RespuestaPerfilDto>;
    delete(perfilRequest: DeletePerfilDto): Promise<RespuestaPerfilDto>;
}
//# sourceMappingURL=PerfilController.d.ts.map