let productosController = 

{
  comprar: (req,res) => {
    res.render("carrito");
  },

  deleteCarrito: (req, res) => {
  res.send ("soy delete!")
  },

  listadoProducto: (req,res) => {
    res.render("productos");
  },
 
  detalleProducto: (req,res) => {
    res.render("detalleProducto");
  },
}

module.exports = productosController;