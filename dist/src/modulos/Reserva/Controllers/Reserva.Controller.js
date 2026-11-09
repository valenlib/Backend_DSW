export default class ReservaController {
    constructor(reservaService) {
        this.reservaService = reservaService;
    }
    async findAll(req, res) {
        res.status(200).json(await this.reservaService.findAll(req.auth.id, req.auth.rol));
    }
    async findById(req, res) {
        const response = await this.reservaService.findById(Number(req.params.id), req.auth.id, req.auth.rol);
        if (!response) {
            res.status(404).json({ message: 'Reserva no encontrada' });
            return;
        }
        res.status(200).json(response);
    }
    async findByEmail(req, res) {
        const response = await this.reservaService.findByEmail(String(req.params.email));
        if (!response) {
            res.status(404).json({ message: 'Reserva no encontrada' });
            return;
        }
        res.status(200).json(response);
    }
    async create(req, res) {
        res.status(201).json(await this.reservaService.create(req.body, req.auth.id, req.auth.rol));
    }
    async update(req, res) {
        const response = await this.reservaService.update(Number(req.params.id), req.body, req.auth.id, req.auth.rol);
        if (!response) {
            res.status(404).json({ message: 'Reserva no encontrada' });
            return;
        }
        res.status(200).json(response);
    }
    async logicalDelete(req, res) {
        const response = await this.reservaService.logicalDelete(Number(req.params.id), req.auth.id, req.auth.rol);
        if (!response) {
            res.status(404).json({ message: 'Reserva no encontrada' });
            return;
        }
        res.status(200).json(response);
    }
    async delete(req, res) {
        const response = await this.reservaService.delete(Number(req.params.id));
        if (!response) {
            res.status(404).json({ message: 'Reserva no encontrada' });
            return;
        }
        res.status(200).json(response);
    }
}
//# sourceMappingURL=Reserva.Controller.js.map