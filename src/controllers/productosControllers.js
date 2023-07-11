let productosController = 

{
  comprar: (req,res) => {
    res.render("carrito");
  },

  listadoProducto: (req,res) => {
    res.render("productos");
  },
 
  detalleProducto: (req,res) => {
    res.render("producto");
  },
}

module.exports = productosController;