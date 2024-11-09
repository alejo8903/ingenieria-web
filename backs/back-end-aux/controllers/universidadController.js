const universidad = require('../models/universidad')
const { request, response} = require('express')

const createUniversidad = async (req = request , res = response ) => {
    try {
        const data = req.body
        const newUniversidad = new universidad(data)
        await newUniversidad.save()
        return res.status(201).json(newUniversidad)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getUniversidades = async (req = request , res = response ) => {
    try {
        const universidadesDB = await universidad.find()
        return res.json(universidadesDB)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getUniversidadById = async (req = request , res = response ) => {
    try {
        const { id } = req.params
        const newUniversidad = await universidad.findById(id)
        return res.status(200).json(newUniversidad) 
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const updateUniversidadById = async (req = request , res = response ) => {
    try {
        const { id } = req.params
        const data = {
            nombre: req.body.nombre,
            fechaActualizacion: new Date()
        }
        const newUniversidad = await universidad.findByIdAndUpdate
            (id, data, { new: true })
        return res.status(201).json(newUniversidad)
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const deleteUniversidadById = async (req = request , res = response ) => {
    try {
        const { id } = req.params
        await universidad.findByIdAndDelete(id)
        return res.json({ msg: 'Universidad eliminado' })
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

module.exports = {
    createUniversidad,
    getUniversidades,
    getUniversidadById,
    updateUniversidadById,
    deleteUniversidadById
}