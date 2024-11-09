const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        enum: ['Ensayo', 'artículo', 'monografía',
             'Trabajo final de pregrado', 'Trabajo final de especialización']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Cliente requerido']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: [true, 'Tipo de proyecto requerido']
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: [true, 'Universidad requerida']
    },
    etapas: [{
        type: Schema.Types.ObjectId,
        ref: 'Etapa'
    }]
})

module.exports = model('Proyecto', ProyectoSchema)
