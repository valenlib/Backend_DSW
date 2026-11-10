export default class PasajeController {
    constructor(pasajeService) {
        this.pasajeService = pasajeService;
    }
    async create(req, res) {
        res.status(201).json(await this.pasajeService.create(req.body));
    }
    async delete(req, res) {
        const response = await this.pasajeService.delete(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: "Pasaje no encontrado" });
            return;
        }
        res.status(200).json(response);
    }
    async update(req, res) {
        const response = await this.pasajeService.update(Number(req.params.id), req.body);
        if (!response) {
            res.status(404).json({ message: "Pasaje no encontrado" });
            return;
        }
        res.status(200).json(response);
    }
}
//# sourceMappingURL=Pasaje.Controller.js.map