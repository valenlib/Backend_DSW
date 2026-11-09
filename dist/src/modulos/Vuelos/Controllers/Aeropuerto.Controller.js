export default class AeropuertoController {
    constructor(aeropuertoService) {
        this.aeropuertoService = aeropuertoService;
    }
    async findAll(req, res) {
        res.status(200).json(await this.aeropuertoService.findAll());
    }
    async findById(req, res) {
        const response = await this.aeropuertoService.findById(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: "Aeropuerto no encontrado" });
            return;
        }
        res.status(200).json(response);
    }
    async create(req, res) {
        const response = await this.aeropuertoService.create(req.body);
        res.status(201).json(response);
    }
    async update(req, res) {
        const response = await this.aeropuertoService.update(Number(req.params.id), req.body);
        if (!response) {
            res.status(404).json({ message: "Aeropuerto no encontrado" });
            return;
        }
        res.status(200).json(response);
    }
    async logicalDelete(req, res) {
        const response = await this.aeropuertoService.logicalDelete(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: "Aeropuerto no encontrado" });
            return;
        }
        res.status(200).json(response);
    }
    async delete(req, res) {
        const response = await this.aeropuertoService.delete(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: "Aeropuerto no encontrado" });
            return;
        }
        res.status(200).json(response);
    }
}
//# sourceMappingURL=Aeropuerto.Controller.js.map