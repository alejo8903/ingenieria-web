const { request, response } = require('express')
const Proyecto = require('../models/proyecto')
const Etapa = require('../models/etapa')
const Cliente = require('../models/cliente')
const TipoProyecto = require('../models/tipoProyecto')
const Universidad = require('../models/universidad')



const createProyecto = async (req = request, res = response) => {
    try {
        const etapas = await Etapa.findById(req.body.etapas)
        const cliente = await Cliente.findById(req.body.cliente)
        const tipoProyecto = await TipoProyecto.findById(req.body.tipoProyecto)
        const universidad = await Universidad.findById(req.body.universidad)

        if (!etapas || !cliente || !tipoProyecto || !universidad) {
            return res.status(400).json({
                msg: 'One or more related entities not found'
            })
        }

        const nombre = req.body.nombre
        const proyecto = {
            nombre,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
            etapas,
            cliente,
            tipoProyecto,
            universidad
        }
        const newProyecto = new Proyecto(proyecto)
        await newProyecto.save()
        res.status(201).json({ newProyecto })
    } catch (e) {
        res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getProyectos = async (req = request, res = response) => {
    try {
        const proyectos = await Proyecto.find()
            .populate('etapas')
            .populate('cliente')
            .populate('tipoProyecto')
            .populate('universidad')

        console.log("Peticion recibida - Hora actual: " + new Date().toLocaleTimeString())
        res.json(proyectos);
    } catch (e) {
        res.status(500).json({
            msg: 'Error general ' + e
        });
    }
};

const getProyecto = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const proyecto = await Proyecto.findById(id)
            .populate('etapas')
            .populate('cliente')
            .populate('tipoProyecto')
            .populate('universidad')
        res.status(200).json(proyecto)
    } catch (e) {
        res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const updateProyecto = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const etapas = await Etapa.findById(req.body.etapas)
        const cliente = await Cliente.findById(req.body.cliente)
        const tipoProyecto = await TipoProyecto.findById(req.body.tipoProyecto)
        const universidad = await Universidad.findById(req.body.universidad)

        if (!etapas || !cliente || !tipoProyecto || !universidad) {
            return res.status(400).json({
                msg: 'One or more related entities not found'
            })
        }

        const nombre = req.body.nombre
        const proyecto = {
            nombre,
            fechaActualizacion: new Date(),
            etapas,
            cliente,
            tipoProyecto,
            universidad
        }
        const newProyecto = await Proyecto.findByIdAndUpdate
            (id, proyecto, { new: true })
        const proyectoUpdated = await Proyecto.findById(id)

        res.status(201).json(proyectoUpdated)
    } catch (e) {
        res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const deleteProyecto = async (req = request, res = response) => {
    try {
        const { id } = req.params
        await Proyecto.findByIdAndDelete(id)
        res.json({
            ok: true,
            message: 'Proyecto eliminado'
        })
    } catch (e) {
        res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


module.exports = {
    createProyecto,
    getProyectos,
    getProyecto,
    updateProyecto,
    deleteProyecto
}