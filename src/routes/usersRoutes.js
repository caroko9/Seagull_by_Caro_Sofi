const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
/* vinculando con el archivo productosRoutes.js */
const controladorUsers = require ('../controllers/usersControllers');

let usermulterDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => 
{let userimgfolder = path.join(__dirname, '../../public/img/usuarios');
 cb(null, userimgfolder)
},
    filename: (req, file, cb) => {
let usuarioimg = Date.now() + file.originalname;
cb(null, usuarioimg);   
   },
});

//Creamos una variable para invocar multer, pasamos como param la propiedad storage y asignamos la var creada en el paso anterior
let usuarioimgUpload = multer({ storage : usermulterDiskStorage });

router.get('/register', controladorUsers.register);

router.post('/register', usuarioimgUpload.single('imagenPerfil'), controladorUsers.create);

router.get('/login', controladorUsers.iniciarSesion);

router.get('/list', controladorUsers.list);

router.get('/search', controladorUsers.buscarEscuela);


 
 
module.exports = router;
