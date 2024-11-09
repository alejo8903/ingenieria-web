const { Router } = require('express')
const { createProyecto, getProyectos, getProyecto, deleteProyecto, updateProyecto} = require('../controllers/proyectoController')

const router = Router()

// crear
router.post('/', createProyecto)

// consultar todos
router.get('/', getProyectos)

router.get('/:id', getProyecto)

router.delete('/:id', deleteProyecto)

router.put('/:id', updateProyecto)

module.exports = router;