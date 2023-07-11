const express = require('express');
const router = express.Router();

const escuelasController = require('../controllers/escuelasControllers');


router.get('/escuelas', escuelasController.sumaEscuela);


module.exports = router;