const express = require('express');
const router = express.Router();

const escuelasController = require('../controllers/escuelasControllers');


router.get('/escuelascreate', escuelasController.sumaEscuela);

router.post('/escuelascreate', escuelasController.creaEscuela);

//router.post('/registro', escuelasController.create); //guarda la info del form

//router.get('/listado', escuelasController.list);

//router.post('/escuelas', escuelasController.creaEscuela)



module.exports = router;