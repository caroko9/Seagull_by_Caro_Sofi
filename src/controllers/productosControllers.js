let productosController = 

{
  comprar: (req,res) => {
    res.render("carrito");
  },

  listadoProducto: (req,res) => {
    res.render("productos");
  }

}

module.exports = productosController;