export class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req, res) {
        const response = await this.authService.login(req.body);
        if (!response) {
            res.status(401).json({ mensaje: "Credenciales incorrectas" });
            return;
        }
        res.json(response);
    }
    async logout(req, res) {
        const response = await this.authService.logout(req.body);
        res.status(204).send();
    }
    async refresh(req, res) {
        const response = await this.authService.refresh(req.body.refreshToken);
        if (!response) {
            res.status(401).json({ message: "El refresh token no es válido" });
            return;
        }
        res.json(response);
    }
}
//# sourceMappingURL=Auth.Controller.js.map