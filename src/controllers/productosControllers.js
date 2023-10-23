const fs = require('fs'); //utilizamos Filesystem para el mpetodo delete carrito linea 138
const db = require('../database/models'); 
const { producto } = require('../database/models');
const carrito = [];// Inicializa un array vacío para el carrito de compra

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

  listadoProductoAdmin: async (req, res) => {
    try {
      const listadoProductos = await db.producto.findAll();
      res.render("productosAdmin", { listadoProductos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el listado de productos');
    }
  },


  formularioCrearProducto: (req, res) => {
    res.render('crearProducto'); 
  },


  crearProducto: async (req, res) => {
    try {
      const productoNuevo = req.body;
      const productoimgUpload = req.file;
      
      if (!productoimgUpload) {
        return res.status(400).send('No se ha subido una imagen válida.');
      }
      const primeraImagen = productoimgUpload.filename;
      
      console.log('req.body:', req.body);
      console.log('req.file:', req.file); 
       
      const imagenCloudinaryURL = `https://res.cloudinary.com/djpb4ilrq/image/upload/${primeraImagen}`;
  
      const nuevoProducto = await db.producto.create({
        nombre: productoNuevo.nombre,
        descripcion: productoNuevo.descripcion,
        precio: productoNuevo.precio,
        categoria: productoNuevo.categoria,
        imagen: imagenCloudinaryURL, 
      });
      
      res.redirect("/productos/productos"); 
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al crear producto: ${error.message}`);
    }
  },
  
  editarProducto: async (req, res) => {
    try {
      const productoId = req.params.id;
      const producto = await db.producto.findByPk(productoId);
  
      if (!producto) {
        return res.status(404).send("Producto no encontrado");
      }
  
      if (req.method === "GET") {
        res.render("editarProducto", { producto });
      } else if (req.method === "POST") {
        await producto.update({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          imagen: req.body.imagenCloudinaryURL,
          precio: req.body.precio,
          categoria: req.body.categoria,
        });

        res.redirect(`/productos/idProducto/${productoId}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al editar el producto");
    }
  },


  idProducto: async (req, res) => {
    try {
      const productoId = req.params.id;
      const productoSeleccionado = await db.producto.findByPk(productoId);
      
      if (!productoSeleccionado) {
        return res.status(404).send("Producto no encontrado");
      }
      
      res.render('idProducto', { producto: productoSeleccionado });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los detalles del producto');
    }
  },

  // CARRITO

  comprar: async (req, res) => {
    try {
      const productoId = req.body.productoId;
      const productoSeleccionado = await db.producto.findByPk(productoId);
      
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
    res.render('carrito', { carrito });
  },

<<<<<<< HEAD
 

  // Éste método estaba para eliminar productos publicados en Json. 
 /* deleteCarrito: async (req, res) => {
=======
  // Éste método estaba para eliminar productos publicados en Json. Hay redefinir
deleteCarrito: async (req, res) => {
>>>>>>> 3cb519ead2ab23e8cfe477358ae49fc345622695
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

  //METODOS APIS

  
//creación de una API: en este caso enviamos la request a un json para que la info pueda ser consumida como si fuera una API 
listProdApi: (req,res) => {
  db.producto
  .findAll()
  .then(productos => {
  return res.status(200).json({
    total: productos.length,
    data: productos,
    status: 200})//indica que la petición se concretó correctamente
         })
}, //data a mostrar en el json. Podemos ver esta info en postman

mostrarProductoId: (req,res) => {
  db.producto
  .findByPk(req.params.id)
  .then(producto => {
  return res.status(200).json({
data: producto,
status: 200})
  })
},

//para hacer total por categoría, averiguar métodos
categoriaProducto: (req,res) => {

    db.producto
      .findAll({
        attributes: ['categoria'], // Selecciona la columna de categoría
        group: ['categoria'], // Agrupa por categoría
      })
      .then((categorias) => {
        const countByCategory = {};
        categorias.forEach((categoria) => {
          countByCategory[categoria.categoria] = categoria.count;
        });
  
        return res.status(200).json({
          countByCategory,
          status: 200,
        });
      })
      .catch((error) => {
        console.error('Error al contar productos por categoría:', error);
        return res.status(500).json({
          error: 'Hubo un error al contar productos por categoría.',
        });
      });

 
//const categorias = req.params.categoria;

  // db.producto
  //   .count({
  //     where: {
  //       categoria: categorias,
  //     },
  //   })
  //   .then((count) => {
  //     return res.status(200).json({
  //       [categorias]: count, // Utiliza la categoría como clave en el objeto
  //       status: 200,
  //     });
  //   })
  //   .catch((error) => {
  //     console.error('Error al contar productos por categoría:', error);
  //     return res.status(500).json({
  //       error: 'Hubo un error al contar productos por categoría.',
  //     });
  //   });

  },
};

module.exports = productosController;
