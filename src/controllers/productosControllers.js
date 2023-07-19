const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../../src/data/productos.json');
const carritoFilePath = path.join(__dirname, '../../src/data/carrito.json');

let productos = [];

let carrito = [] 
  
if (fs.existsSync(carritoFilePath)) {
  const fileContent = fs.readFileSync(carritoFilePath, 'utf-8');

  if (fileContent) {
    carrito = JSON.parse(fileContent);
  }
}

if (fs.existsSync(productosFilePath)) {
  const fileContent = fs.readFileSync(productosFilePath, 'utf-8');

  if (fileContent) {
    productos = JSON.parse(fileContent);
  }
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function generarId() {
  const { v4: uuidv4 } = require('uuid');
  return uuidv4();
}


let productosController = {

  listadoProducto: (req, res) => {
    res.render("productos", { listadoProductos: productos });
  },
  
  idProducto: (req, res) => {
    let productoId = req.params.id;
    let productoSeleccionado = productos.find((productoSeleccionado) => productoSeleccionado.id === productoId);
    res.render('idProducto', { productoSeleccionado });
  },

  comprar: (req, res) => {
    let productoId = req.body.productoId; 
    let productoSeleccionado = productos.find((producto) => producto.id === productoId);
    
      if (!productoSeleccionado) {
        // Handle case when the selected product is not found
        return res.status(404).send("Product not found");
      }
    
      let productoEnCarrito = {
        id: productoSeleccionado.id,
        nombre: productoSeleccionado.nombre,
        precio: productoSeleccionado.precio,
        imagen: productoSeleccionado.imagen
      };
    
      
      carrito.push(productoEnCarrito);

      res.render('carrito', { carrito });
    },
    
    
  vistaCarrito: (req, res) => {
    res.render("carrito")
    res.render('carrito', { carrito: carrito });
  },
  
  deleteCarrito: (req, res) => {
    let productoId = req.params.id;
    
    carrito = carrito.filter((producto) => producto.id !== productoId);
  
    fs.writeFileSync(carritoFilePath, JSON.stringify(carrito), 'utf-8');
  
    res.render('carrito', { carrito: carrito });
  },

};


module.exports = productosController;
