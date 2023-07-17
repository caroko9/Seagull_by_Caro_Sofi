const fs = require('fs');

const path = require('path');

const productosFilePath = path.join(__dirname, '../../src/data/productos.json');
//JSON CON LA LISTA DE PRODUCTOS
let productos = [];

var carrito = [];


if (fs.existsSync(productosFilePath)) {
  const fileContent = fs.readFileSync(productosFilePath, 'utf-8');

  if (fileContent) {
    productos = JSON.parse(fileContent);
  }
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productosController = 

{
//FORMULARIO INTERNO PARA CREAR PRODUCTO. NO ESTÁ LINKEADO A ÍCONOS YA QUE ES INTERNO
  creaProducto: (req, res) => {

		let productoNuevo = req.body;

    let objNuevoProducto = {
      id: generarId(),
      nombre: productoNuevo.nombre,
      descripcion: productoNuevo.descripcion,
      precio: productoNuevo.precio,
      imagen: '/img/productos/${productoNuevo.imagen}',
    };
          
	    productos.push(objNuevoProducto);
      fs.writeFileSync(productosFilePath, JSON.stringify(productos,null,' '));
      res.redirect("./productos"); 
   

    function generarId() {

      const { v4: uuidv4 } = require('uuid');
      return uuidv4();
    }
	},

  agregarAlCarrito: (req, res) => {
    const productoId = req.query.productoId;
  
    // Encuentra el producto seleccionado
    const productoSeleccionado = productos.find((producto) => producto.id === productoId);
  
    // Agrega el producto al carrito
    carrito.push(productoSeleccionado);
  
    // Redirige al carrito
    res.redirect('/carrito');
  },
  
  mostrarCarrito: (req, res) => {
    res.render('carrito', { productoSeleccionado: carrito });
  },
  
  
  
  

  deleteCarrito: (req, res) => {
    let productoId = req.params.productoId;
  
    // Filtra los productos, excluyendo el que se desea eliminar
    let nuevoArregloProductos = productos.filter(function (producto) {
      return producto.id !== productoId;
    });
  
    // Actualiza el arreglo de productos en el archivo JSON
    fs.writeFileSync(productosFilePath, JSON.stringify(nuevoArregloProductos, null, ' '));
  
    // Redirige a la vista del carrito actualizada
    res.redirect('/productos/carrito');
  },
  

  listadoProducto: (req, res) => {
    res.render("productos", { listadoProductos: productos });
  },
  
  //Al seleccionar el producto, muestra el detalle del producto a traves de la vista idProducto.ejs
  idProducto : (req, res) => {
    let productoId = req.params.id;
    
    let productoSeleccionado = productos.find((productoSeleccionado) => productoSeleccionado.id === productoId);
  
   res.render('idProducto', {productoSeleccionado});
  
     
  },
  
  
  
    
  
  sumaProducto: (req, res) => {
    res.render("productos-create");
  },

 
}

module.exports = productosController;