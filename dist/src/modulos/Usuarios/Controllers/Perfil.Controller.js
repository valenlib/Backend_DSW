export class PerfilController {
    constructor(perfilService) {
        this.perfilService = perfilService;
    }
    async actualizarPerfil(req, res) {
        const response = await this.perfilService.actualizarPerfil(req.body);
        res.json(response);
    }
    async logicalDelete(req, res) {
        const response = await this.perfilService.logicalDelete(req.body);
        res.json(response);
    }
    async delete(req, res) {
        const response = await this.perfilService.delete(req.body);
        res.json(response);
    }
}
//# sourceMappingURL=Perfil.Controller.js.map