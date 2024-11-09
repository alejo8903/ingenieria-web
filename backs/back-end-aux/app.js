const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

const { mongoConn } = require('./databases/configuration')
mongoConn()
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyectoRoute')
const universidad = require('./routes/universidadRoute')
const cliente = require('./routes/clienteRoute')
const etapa = require('./routes/etapaRoute')

// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/universidades', universidad)
app.use('/api/clientes', cliente)
app.use('/api/etapas', etapa)

module.exports = app