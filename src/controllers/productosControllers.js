const db = require('../database/models'); // Importa el modelo de Producto de Sequelize

const { producto } = require('../database/models');



const productosController = {
  listadoProducto: async (req, res) => {
    try {
      const listadoProductos = await db.producto.findAll();
      res.render("productos", { listadoProductos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el listado de productos');
    }
  },
  
  
  
  idProducto: async (req, res) => {
    try {
      const productoId = req.params.id;
      const productoSeleccionado = await db.producto.findByPk(productoId);
      
      if (!productoSeleccionado) {
        return res.status(404).send("Producto no encontrado");
      }
      
      res.render('idProducto', { productoSeleccionado });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los detalles del producto');
    }
  },

  comprar: async (req, res) => {
    try {
      const productoId = req.body.productoId;
      const productoSeleccionado = await db.Producto.findByPk(productoId);
      
      if (!productoSeleccionado) {
        return res.status(404).send("Producto no encontrado");
      }
      
      const productoEnCarrito = {
        id: productoSeleccionado.id,
        nombre: productoSeleccionado.nombre,
        precio: productoSeleccionado.precio,
        imagen: productoSeleccionado.imagen
      };
      
      carrito.push(productoEnCarrito); 
      
      res.render('carrito', { carrito });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al agregar el producto al carrito');
    }
  },
  
  vistaCarrito: (req, res) => {
    res.render("carrito");
    res.render('carrito', { carrito: carrito }); 
  },
  
  deleteCarrito: async (req, res) => {
    try {
      const productoId = req.params.id;
      carrito = carrito.filter((producto) => producto.id !== productoId); 
      
      fs.writeFileSync(carritoFilePath, JSON.stringify(carrito), 'utf-8');
      
      res.render('carrito', { carrito: carrito });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar el producto del carrito');
    }
  },
};

module.exports = productosController;
