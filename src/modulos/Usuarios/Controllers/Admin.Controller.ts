
@Controller('admin')
export class AdminController {
  
  constructor(
    private readonly adminService: AdminService,
  ) {}

  
  @get('findall')
  async findAll(): Promise<RespuestaAdminDto> {
    const response = await this.adminService.findAll();
    return ApiResponse.success('Usuarios encontrados exitosamente', response);
  }


  @getone('findbyid/:id')
  async findById(@Param('id') id: number): Promise<RespuestaAdminDto> {
    const response = await this.adminService.findById(id);
    return ApiResponse.success('Usuario encontrado exitosamente', response);
  }

  
  //busqueda por criterio, despues revisar patron criteria

  @getone('findbycriterio/:criterio')
  async findByCriterio(@Param('criterio') criterio: string): Promise<RespuestaAdminDto> {
    const response = await this.adminService.findByCriterio(criterio);
    return ApiResponse.success('Usuario encontrado exitosamente', response);
  }
  
  //actualizar
  @patch('update/:id')
  async update(@Param('id') id: number, @Body() usuario: Usuario): Promise<RespuestaAdminDto> {
    const response = await this.adminService.update(id, usuario);
    return ApiResponse.success('Usuario actualizado exitosamente', response);
  }

  @delete('delete/:id')
  async delete(@Param('id') id: number): Promise<RespuestaAdminDto> {
    const response = await this.adminService.delete(id);
    return ApiResponse.success('Usuario eliminado exitosamente', response);
  }
}

