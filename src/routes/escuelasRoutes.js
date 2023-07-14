const express = require('express');
const router = express.Router();

const escuelasController = require('../controllers/escuelasControllers');


router.get('/escuelascreate', escuelasController.sumaEscuela);

router.post('/escuelascreate', escuelasController.creaEscuela);

router.get('/escuelasList', escuelasController.list); //muestra el listado de escuela

router.get('/escuelasResults', escuelasController.buscarEscuela); //muestra el resultado de las escuelas buscadas por el usuario

//router.get('/escuelasList/id', escuelasController.detalleEscuela); // muestra el detalle por escuela




module.exports = router;