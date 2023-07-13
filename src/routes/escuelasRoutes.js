const express = require('express');
const router = express.Router();

const escuelasController = require('../controllers/escuelasControllers');


router.get('/escuelascreate', escuelasController.sumaEscuela);

router.post('/escuelascreate', escuelasController.creaEscuela);

router.get('/escuelasList', escuelasController.list);

router.get('/escuelasResults', escuelasController.buscarEscuela);

//router.post('/escuelas', escuelasController.creaEscuela)



module.exports = router;