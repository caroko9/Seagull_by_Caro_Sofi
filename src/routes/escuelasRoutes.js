const express = require('express');
const router = express.Router();
const multer = require('multer');

const escuelasController = require('../controllers/escuelasControllers');


router.get('/escuelascreate', escuelasController.sumaEscuela);

router.post('/escuelascreate', escuelasController.creaEscuela);

router.get('/escuelasList', escuelasController.list); //muestra el listado de escuela

router.get('/escuelasResults', escuelasController.buscarEscuela); //muestra el resultado de las escuelas buscadas por el usuario

router.get('/escuela-detalle/:id', escuelasController.idEscuela); // muestra el detalle por escuela

router.get('/editarEscuela/:id', escuelasController.editarEscuela);
router.post('/editarEscuela/:id', escuelasController.editarEscuela);




module.exports = router;