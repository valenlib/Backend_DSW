@Controller ('Registro')

export class RegistroController {
  private readonly registroService: RegistroService;

  constructor(registroService: RegistroService) {
    this.registroService = registroService;
  }


  @Post ('registrar')
  async registrarUsuario(@Body() usuario: Usuario): Promise<RespuestaRegistroDto> {
    const response = await this.registroService.registrarUsuario(usuario);
    return ApiResponse.success('Registro exitoso', response);
  }
}