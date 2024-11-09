const {Router} = require('express')
const {createEtapa, getEtapas, getEtapaById, deleteEtapaById, updateEtapaById} = require('../controllers/etapaController')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapas)

router.get('/:id', getEtapaById)

router.put('/:id', updateEtapaById)

router.delete('/:id', deleteEtapaById)


module.exports = router;
