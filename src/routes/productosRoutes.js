const express = require('express');
const router = express.Router();

const productosController = require ('../controllers/productosControllers');

router.get('/productos', productosController.listadoProducto);

router.post('/crearProducto', productosController.crearProducto);

router.get('/crearProducto', productosController.formularioCrearProducto);

router.get('/idProducto/:id', productosController.idProducto);

router.get('/carrito', productosController.vistaCarrito);

router.post('/carrito', productosController.comprar);

router.delete('/carrito/:id', productosController.deleteCarrito);



module.exports = router;
