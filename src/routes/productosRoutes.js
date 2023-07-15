const express = require('express');
const router = express.Router();
/* probando vincular el controlador con el archivo productosRoutes.js */

const productosController = require ('../controllers/productosControllers');

router.get('/productos-create', productosController.sumaProducto); //Te lleva al formulario para crear producto

router.post('/productos-create', productosController.creaProducto);

router.get('/carrito', productosController.comprar);

router.delete('/carrito', productosController.deleteCarrito)

router.get('/productos', productosController.listadoProducto);

router.get('/productos-detalle/:id', productosController.detalleProducto);

module.exports = router;
