export class RegistroController {
    constructor(registroService) {
        this.registroService = registroService;
    }
    async registrarUsuario(req, res) {
        const response = await this.registroService.registrarUsuario(req.body);
        res.status(201).json(response);
    }
}
//# sourceMappingURL=Registro.Controller.js.map