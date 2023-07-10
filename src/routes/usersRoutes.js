const express = require('express');
const router = express.Router();
/* probando vincular el controlador con el archivo productosRoutes.js */
const controladorUsers = require ('../controllers/usersControllers');

router.get('/register', controladorUsers.registrarse);

router.get('/login', controladorUsers.iniciarSesion);

router.get('/list', controladorUsers.list);

router.get('/search', controladorUsers.buscarUsuario);
 
 


module.exports = router;
