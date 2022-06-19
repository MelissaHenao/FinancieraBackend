const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const transaccionController = require('../controllers/transaccion_controller')

//Transacciones
router.get(apiRoute+'/transaccion',transaccionController.getAll)
router.post(apiRoute+'/transaccion',transaccionController.create)
router.put(apiRoute+'/transaccion',transaccionController.update)
router.delete(apiRoute+'/transaccion',transaccionController.delete)

module.exports = router;