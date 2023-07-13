const express = require('express');
const router = express.Router();
/* probando vincular el controlador con el archivo productosRoutes.js */

const productosController = require ('../controllers/productosControllers');


router.get('/carrito', productosController.comprar);

router.delete('/carrito', productosController.deleteCarrito)

router.get('/productos', productosController.listadoProducto);

router.get('../products/producto', productosController.detalleProducto);

module.exports = router;
