const Reserva = require('../models/Reserva');

exports.createReserva = async (req, res) => {
    try {
        const { cliente, fecha, hora, personas } = req.body;
        const nuevaReserva = new Reserva({ cliente, fecha, hora, personas });
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la reserva', error });
    }
};

exports.getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas', error });
    }
};

exports.getReservasById = async (req,res)=>{
    try {
        const reserva = await Reserva.findById(req.params.id);
        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la reserva', error });
    }
};



