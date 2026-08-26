import { Controller, Patch, Body, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
import { LogicalDeletePerfilDto } from './dto/logical-delete-perfil.dto';
import { DeletePerfilDto } from './dto/delete-perfil.dto';
import { RespuestaPerfilDto } from './dto/respuesta-perfil.dto';
import { ApiResponse } from '../common/api-response';


@Controller ('perfil')
export class PerfilController {
  constructor(
    private readonly perfilService: PerfilService,
  ) {}
  
  @Patch('actualizar')
  async actualizarPerfil(@Body() perfilRequest: ActualizarPerfilDto): Promise<RespuestaPerfilDto> {
    const response = await this.perfilService.actualizarPerfil(perfilRequest);
    return ApiResponse.success('Perfil actualizado exitosamente', response);
  }

  @Patch ('logicalDelete')
  async logicalDelete(@Body() perfilRequest: LogicalDeletePerfilDto): Promise<RespuestaPerfilDto> {
    const response = await this.perfilService.logicalDelete(perfilRequest);
    return ApiResponse.success('Perfil eliminado lógicamente exitosamente', response);
  }

  @Delete('delete')
  async delete(@Body() perfilRequest: DeletePerfilDto): Promise<RespuestaPerfilDto> {
    const response = await this.perfilService.delete(perfilRequest);
    return ApiResponse.success('Perfil eliminado exitosamente', response);
  }

}