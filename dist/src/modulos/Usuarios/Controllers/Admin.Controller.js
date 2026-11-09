export class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async findAll(req, res) {
        const response = await this.adminService.findAll();
        res.status(200).json(response);
    }
    async findById(req, res) {
        const response = await this.adminService.findById(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json(response);
    }
    async findByCriterio(req, res) {
        const response = await this.adminService.findByCriterio(String(req.params.criterio));
        res.status(200).json(response);
    }
    async update(req, res) {
        const response = await this.adminService.update(Number(req.params.id), req.body);
        res.json(response);
    }
    async delete(req, res) {
        const response = await this.adminService.delete(Number(req.params.id));
        res.json(response);
    }
}
//# sourceMappingURL=Admin.Controller.js.map