const {Router} = require('express')

const {createCliente, getClientes, getClienteById, updateClienteById, deleteClienteById} = require('../controllers/clienteController')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getClientes)

router.get('/:id', getClienteById)

router.put('/:id', updateClienteById)

router.delete('/:id', deleteClienteById)


module.exports = router;
