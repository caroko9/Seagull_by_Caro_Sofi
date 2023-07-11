const express = require('express');
const router = express.Router();
/* probando vincular el controlador con el archivo productosRoutes.js */
const controladorUsers = require ('../controllers/usersControllers');



router.get('/login', controladorUsers.iniciarSesion);

/*router.get('/list', (req, res) => {
 res.render('userList', {"usuarios": usuarios});
});*/

router.get('/list', controladorUsers.list);

router.get('/search', controladorUsers.buscarUsuario);
 
 


module.exports = router;
