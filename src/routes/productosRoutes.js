const express = require('express');
const router = express.Router();
/* probando vincular el controlador con el archivo productosRoutes.js */

const productosController = require ('../controllers/productosControllers');

router.get('/productos-create', productosController.sumaProducto); //Te lleva al formulario para crear producto

router.post('/productos-create', productosController.creaProducto);

router.post('/carrito', productosController.comprar);

router.delete('/carrito/:id', productosController.deleteCarrito);

router.get('/productos', productosController.listadoProducto);

router.get('/idProducto/:id', productosController.idProducto); //Al seleccionar un producto en la vista anterior, muestra el detalle del mismo

module.exports = router;
