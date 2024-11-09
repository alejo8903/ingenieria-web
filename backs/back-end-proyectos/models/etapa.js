const {Schema, model} = require('mongoose')

const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        enum: ['Anteproyecto', 'Entrega parcial 1', 'Entrega parcial 2', 'Entrega final']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Etapa', EtapaSchema)