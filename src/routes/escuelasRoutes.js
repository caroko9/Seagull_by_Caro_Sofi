const express = require('express');
const router = express.Router();

const escuelasController = require('../controllers/escuelasControllers');


router.get('/escuelas', escuelasController.sumaEscuela);

router.post('/escuelas', escuelasController.creaEscuela)


module.exports = router;