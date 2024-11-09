const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTipoProyecto = async (req = request, res = response) => {
    try {
        const data = req.body
        const newTipoProyecto = new TipoProyecto(data)
        await newTipoProyecto.save()
        return res.status(201).json(newTipoProyecto)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }

}

const getTipoProyecto = async (req = request, res = response) => {
    try {
        const tipoProyectoDB = await TipoProyecto.find()
        return res.json(tipoProyectoDB)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getTipoProyectoByID = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const newTipoProyecto = await TipoProyecto.findById(id)
        return res.status(200).json(newTipoProyecto)
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


const updateTipoEquipoByID = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const data = {
            nombre: req.body.nombre,
            fechaActualizacion: new Date()
        }
        const newTipoProyecto = await TipoProyecto.findByIdAndUpdate
            (id, data, { new: true })
        return res.status(201).json(newTipoProyecto)
    }catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }

}

const deleteTipoProyectoByID = async (req = request, res = response) => {
    try {
        const { id } = req.params
        await TipoProyecto.findByIdAndDelete(id)
        return res.json({ msg: 'Tipo de Proyecto eliminado' })
    }catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


module.exports = { 
    createTipoProyecto, 
    getTipoProyecto,
    updateTipoEquipoByID,
    deleteTipoProyectoByID,
    getTipoProyectoByID

}