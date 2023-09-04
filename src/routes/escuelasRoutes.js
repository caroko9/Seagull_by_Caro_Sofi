const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const escuelasController = require('../controllers/escuelasControllers');


let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => 
{let imgfolder = path.join(__dirname, '../../public/img/escuelas');
 cb(null, imgfolder)
},
    filename: (req, file, cb) => {
let escuelaimg = Date.now() + file.originalname;
cb(null, escuelaimg);   
   },
});
//Creamos una variable que la invocación de multer, pasamos como param la propiedad storage y asignamos la var creada en el paso anterior
let escuelaimgUpload = multer({ storage : multerDiskStorage });

router.get('/escuelascreate', escuelasController.sumaEscuela);

router.post('/escuelascreate', escuelaimgUpload.array('imagen'), escuelasController.creaEscuela);

router.get('/escuelasList', escuelasController.list); //muestra el listado de escuela

router.get('/escuelasResults', escuelasController.buscarEscuela); //muestra el resultado de las escuelas buscadas por el usuario

router.get('/escuela-detalle/:id', escuelasController.idEscuela); // muestra el detalle por escuela

router.get('/editarEscuela/:id', escuelasController.editarEscuela);
router.post('/editarEscuela/:id', escuelasController.editarEscuela);
router.put('/editarEscuela/:id', escuelaimgUpload.array('imagen'), escuelasController.editarEscuela);




module.exports = router;