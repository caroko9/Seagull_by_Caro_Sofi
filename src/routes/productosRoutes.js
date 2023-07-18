const express = require('express');
const router = express.Router();

const productosController = require ('../controllers/productosControllers');

router.get('/productos', productosController.listadoProducto);

router.get('/idProducto/:id', productosController.idProducto);

router.get('/carrito', productosController.vistaCarrito);

router.post('/carrito', productosController.comprar);

router.delete('/carrito/:id', productosController.deleteCarrito);

router.put('/carrito', productosController.editandoCarrito)

module.exports = router;
