export default class VueloController {
    constructor(vueloService) {
        this.vueloService = vueloService;
    }
    async findAll(req, res) {
        res.status(200).json(await this.vueloService.findAll());
    }
    async findById(req, res) {
        const response = await this.vueloService.findById(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: 'Vuelo no encontrado' });
            return;
        }
        res.status(200).json(response);
    }
    async create(req, res) {
        const response = await this.vueloService.create(req.body);
        res.status(201).json(response);
    }
    async update(req, res) {
        const response = await this.vueloService.update(Number(req.params.id), req.body);
        if (!response) {
            res.status(404).json({ message: 'Vuelo no encontrado' });
            return;
        }
        res.status(200).json(response);
    }
    async delete(req, res) {
        const response = await this.vueloService.delete(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: 'Vuelo no encontrado' });
            return;
        }
        res.status(200).json(response);
    }
}
//# sourceMappingURL=Vuelo.Controller.js.map