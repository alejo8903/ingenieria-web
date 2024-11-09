const { Router } = require('express')
const { createTipoProyecto, getTipoProyecto, getTipoProyectoByID, updateTipoEquipoByID, deleteTipoProyectoByID } = require('../controllers/tipoProyectoController')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyecto)

router.get('/:id', getTipoProyectoByID)

router.put('/:id', updateTipoEquipoByID)

router.delete('/:id', deleteTipoProyectoByID)


module.exports = router;