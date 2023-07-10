const express = require('express');
const router = express.Router();
/* probando vincular el controlador con el archivo productosRoutes.js */

const productosController = require ('../controllers/productosControllers');



router.get('/carrito', (req, res)=>{
  res.render('carrito')
})

router.get('/producto', (req, res) => {
    res.render('producto')
})


module.exports = router;
