const db = require('../database/models');
const { escuela } = require('../database/models'); 
const Op = db.Sequelize.Op;


const controller = {

  sumaEscuela: (req, res) => {
    res.render("escuelascreate");
  },


  creaEscuela: async (req, res) => {
    try {
      const escuelaNueva = req.body;
      const escuelaimgUpload = req.files; 
      const primeraImagen = escuelaimgUpload[0].filename;
      const imagenCloudinaryURL = `https://res.cloudinary.com/djpb4ilrq/image/upload/${primeraImagen}`;

      const nuevaEscuela = await db.escuela.create({
        nombre: escuelaNueva.nombre,
        email: escuelaNueva.email,
        telefono: escuelaNueva.telefono,
        pagina_web: escuelaNueva.pagina_web,
        descripcion: escuelaNueva.descripcion,
        ubicacion: escuelaNueva.ubicacion,
        pais: escuelaNueva.pais,
        imagen: imagenCloudinaryURL, 
        estado: "Pendiente",
      });
      
      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al crear la escuela: ${error.message}`);
    }
  },

  list: async (req, res) => {
    try {
      const escuelasRegistradas = await db.escuela.findAll({where: { estado: "Aprobada", fecha_eliminacion: null}}); //escuelas aprobadas?
      res.render("escuelasList", { escuelasRegistradas });
        } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener la lista de escuelas');
    }
  },

  
  listadoEscuelasAdm: async (req, res) => {
    try {
      const escuelasRegistradas = await db.escuela.findAll({where: { fecha_eliminacion: null, estado: "Aprobada" }}); 
      res.render("adminEscuelasList", { escuelasRegistradas });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener la lista de escuelas');
    }
  },

 escuelasPendientes:  async (req, res) => {
try {
  const escuelasPendientes = await db.escuela.findAll({where: { estado: "Pendiente"}}); 
  res.render("escuelasPendientes", { escuelasPendientes } )
} catch (error) {
  console.error(error);
  res.status(500).send('Error al obtener la lista de escuelas');
}
},

buscarEscuela: async (req, res) => {
  try {
    const escuelaEncontrada = req.query.buscar;
    const escuelasBuscadasArray = await db.Escuela.findAll({
      where: {
        nombre: {
          [db.Sequelize.Op.iLike]: `%${escuelaEncontrada}%`,
        },
      },
    });
    res.render("escuelasResults", { escuelasBuscadas: escuelasBuscadasArray });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al buscar escuelas');
  }
},


    idEscuela: async (req, res) => {
    try {
      const escuelaId = req.params.id;
      const escuela = await db.escuela.findByPk(escuelaId);

      if (!escuela) {
        return res.status(404).send("Escuela no encontrada");
      }

      res.render('escuela-detalle', { escuela });
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al mostrar los detalles de la escuela la escuela: ${error.message}`);
    }
  },

  editarEscuela: async (req, res) => {
    try {
      const escuelaId = req.params.id;
      const escuela = await db.escuela.findByPk(escuelaId);

      if (!escuela) {
        return res.status(404).send("Escuela no encontrada");
      }

      if (req.method === "GET") {
        res.render("editarEscuela", { escuela });
      } else if (req.method === "POST") {
        await escuela.update({
          nombre: req.body.nombre,
          email: req.body.email,
          telefono: req.body.telefono,
          pagina_web: req.body.pagina_web,
          descripcion: req.body.descripcion,
          ubicacion: req.body.ubicacion,
          imagen: req.body.imagenCloudinaryURL,
          pais: req.body.pais,
        
        });

        res.redirect(`/escuelas/escuela-detalle/${escuelaId}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al editar la escuela');
    }
  },

  
eliminarEscuela: async (req, res) => { //permite eliminarla por completo
  try {
    await escuela.destroy({where: { id: req.params.id }});
    res.redirect('/adminEscuelasList');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la escuela');
  }
},

//METODOS APIS

//creación de una API: en este caso enviamos la request a un json para que la info pueda ser consumida como si fuera una API 
listApi: (req,res) => {
  db.escuela
  .findAll()
  .then(escuelas => {
  return res.status(200).json({
    total: escuelas.length,
    data: escuelas,
    status: 200})
         })
}, //data a mostrar en el json. Podemos ver esta info en postman

mostrarEscuelaId: (req,res) => {
  db.escuela
  .findByPk(req.params.id)
  .then(escuela => {
  return res.status(200).json({
data: escuela,
status: 200})
  })
},
 //este no funciona, no encuentro el error
 search: (req, res) => {
   // const keyword = req.query.keyword; // Guarda req.query.keyword en una variable
  
    db.escuela
      .findAll({
        where: {
          estado: req.params.estado
        },
          })
      .then(escuelas => {
        return res.status(200).json({
          total: estado.length,
          data: escuelas,
          status: 200});
         
      })
        }


     //Opción B del mismo método. Ninguno trae resultados
      /* search: async (req, res) => {
        try {
          const keyword = req.query.keyword;
          const searchkeyword = await db.escuela.findAll({nombre: { [Op.like]: '%' + keyword + '%'}}); //escuelas aprobadas?
          res.json({ searchkeyword });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al obtener la lista de escuelas');
        }
      },*/
  

};


module.exports = controller;


