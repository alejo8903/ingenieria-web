const Cliente = require('../models/cliente')

const createCliente = async (req, res) => {
    try {
        const data = {
            nombre: req.body.nombre,
            email: req.body.email,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date()
        }

        const newCliente = new Cliente(data)
        await newCliente.save()
        return res.status(201).json(newCliente)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getClientes = async (req, res) => {
    try {
        const clientesDB = await Cliente.find()
        return res.json(clientesDB)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getClienteById = async (req, res) => {
    try {
        const { id } = req.params
        const cliente = await Cliente.findById(id)
        return res.json(cliente)
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const updateClienteById = async (req, res) => {
    try {
        const { id } = req.params
        const data = {
            nombre: req.body.nombre,
            email: req.body.email,
            fechaActualizacion: new Date()
        }
        const cliente = await Cliente.findByIdAndUpdate
            (id, data, { new: true })
        return res.status(201).json(cliente)
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


const deleteClienteById = async (req, res) => {
    try {
        const { id } = req.params
        await Cliente.findByIdAndDelete(id)
        return res.json({ msg: 'Cliente eliminado' })
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


module.exports = {
    createCliente,
    getClientes,
    getClienteById,
    updateClienteById,
    deleteClienteById
}