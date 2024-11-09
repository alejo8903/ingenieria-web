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


const proyecto = require('./routes/proyectoRoute')

// middlewares

app.use('/api/proyectos', proyecto)


module.exports = app