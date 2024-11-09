const {Router} = require('express')
const {createUniversidad, getUniversidades, getUniversidadById, updateUniversidadById, deleteUniversidadById} = require('../controllers/universidadController')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getUniversidades)

router.get('/:id', getUniversidadById)

router.put('/:id', updateUniversidadById)

router.delete('/:id', deleteUniversidadById)


module.exports = router;