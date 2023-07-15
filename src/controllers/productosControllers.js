const fs = require('fs');

const path = require('path');

const productosFilePath = path.join(__dirname, '../../src/data/productos.json');
//JSON CON LA LISTA DE PRODUCTOS
let productos = [];

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
                        nombre: objNuevoProducto.nombre,
			                  descripcion: escuelaNueva.descripcion,
			                  precio: escuelaNueva.precio,
		       };

          
	    productos.push(objNuevoProducto);
      fs.writeFileSync(productosFilePath, JSON.stringify(productos,null,' '));
      res.redirect("./productos"); 
   

    function generarId() {

      const { v4: uuidv4 } = require('uuid');
      return uuidv4();
    }
	},
  
  idProducto : (req, res) => {
    let productoId = req.params.id;
    
    let producto = productos.find((producto) => producto.id === productoId);
  
    res.render('producto-detalle', { producto});
   //res.send(productoId)
  
  },
  comprar: (req,res) => {
    res.render("carrito");
  },

  deleteCarrito: (req, res) => {
  res.send ("soy delete!")
  },

  listadoProducto: (req,res) => {
  //res.render("productosv2TEST", { listadoProductos: productos}); //TEST para listado de productos por id
 res.render("productos", { listadoProductos: productos}); 
  },
    
 
  detalleProducto: (req,res) => {
    res.render("productos-detalle");
  },

  sumaProducto: (req, res) => {
    res.render("productos-create");
  },

 
}

module.exports = productosController;