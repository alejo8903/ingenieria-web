const etapa = require('../models/etapa');
const {request, response} = require('express')

const createEtapa = async (req = request, res = response) => {
    try {
        const data = {
                nombre: req.body.nombre,
                fechaInicio: new Date(),
                fechaFin: new Date(),
        }        
        const newEtapa = new etapa(data)
        await newEtapa.save()
        return res.status(201).json(newEtapa)
    } catch (e) {
        console.log(e)  
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getEtapas = async (req = request, res = response) => {
    try {
        const etapasDB = await etapa.find()
        return res.json(etapasDB)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getEtapaById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const newEtapa = await etapa.findById(id)
        return res.status(200).json(newEtapa)
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const updateEtapaById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const data = {
            nombre: req.body.nombre,
            fechaActualizacion: new Date()
        }
        const newEtapa = await etapa.findByIdAndUpdate
            (id, data, { new: true })
        return res.status(201).json(newEtapa)
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const deleteEtapaById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        await etapa.findByIdAndDelete(id)
        return res.json({ msg: 'Etapa eliminado' })
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

module.exports = {
    createEtapa,
    getEtapas,
    getEtapaById,
    updateEtapaById,
    deleteEtapaById
}
