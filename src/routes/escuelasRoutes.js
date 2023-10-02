const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const escuelasController = require('../controllers/escuelasControllers');

/*       
cloudinary.config({ 
  cloud_name: 'djpb4ilrq', 
  api_key: '985976768223588', 
  api_secret: 'YCHKWiVIW_0o9s4jvkYESAmfA_s' 
});*/

cloudinary.config({ 
  cloud_name: 'dgofs3hfj', 
  api_key: '289734147884788', 
  api_secret: 'efFl1VIjBlEoN9WlTe1gVe-KTNk' 
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'escuelas',
    allowed_formats: ['jpg', 'png'], 
    transformation: [{ width: 500, height: 500, crop: 'limit' }], 
  },
});

const upload = multer({ storage: storage });

//CREACIÓN DE ESCUELAS 
router.get('/escuelascreate', escuelasController.sumaEscuela);
router.post('/escuelascreate', upload.array('imagen'), escuelasController.creaEscuela);

//LISTA LAS ESCUELAS
router.get('/escuelasList', escuelasController.list);
router.get('/adminEscuelasList', escuelasController.listadoEscuelasAdm); //En estas se elimina, se edita y se aprueba.
router.get('/escuelasPendientes', escuelasController.escuelasPendientes);

//BUSCAR ESCUELAS
router.get('/escuelasResults', escuelasController.buscarEscuela);

//DETALLE DE ESCUELAS USUARIOS Y ADM
router.get('/escuela-detalle/:id', escuelasController.idEscuela);

//APROBAR ESCUELAS PENDIENTES
//router.post('/escuela/aprobar/:id', escuelaController.aprobarEscuelaPendiente);

//EDITAR ESCUELAS
router.get('/editarEscuela/:id', escuelasController.editarEscuela);
router.post('/editarEscuela/:id', escuelasController.editarEscuela);
router.put('/editarEscuela/:id', upload.array('imagen'), escuelasController.editarEscuela);

//ELIMINAR ESCUELAS
//router.delete('/escuelas/eliminarEscuela/:id', escuelasController.eliminarEscuela);
//router.post('/escuelas/eliminarEscuela/:id', escuelasController.eliminarEscuela);

router.delete('/:id', escuelasController.eliminarEscuela); 

//Rutas APIS
router.get('/', escuelasController.listApi); //ruta que arroja la info en un json para que pueda ser consumida por una api
router.get('/:id', escuelasController.mostrarEscuelaId);

module.exports = router;




