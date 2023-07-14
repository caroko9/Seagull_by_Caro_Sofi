const express = require('express');
const router = express.Router();
/* vinculando con el archivo productosRoutes.js */
const controladorUsers = require ('../controllers/usersControllers');

router.get('/register', controladorUsers.register);

router.post('/register', controladorUsers.create);

router.get('/login', controladorUsers.iniciarSesion);

router.get('/list', controladorUsers.list);

router.get('/search', controladorUsers.buscarEscuela);
 
 


module.exports = router;
