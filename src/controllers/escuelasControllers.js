const db = require('../database/models'); // Importa el modelo de Escuela de Sequelize

const { escuela } = require('../database/models'); // Asegúrate de usar el nombre correcto del modelo


const controller = {

  
  sumaEscuela: (req, res) => {
    res.render("escuelascreate");
  },


  creaEscuela: async (req, res) => {
    try {
      const escuelaNueva = req.body;
      const escuelaimgUpload = req.files;

      // Crea una nueva escuela en la base de datos utilizando Sequelize
      const nuevaEscuela = await db.escuela.create({
        nombre: escuelaNueva.nombre,
        email: escuelaNueva.email,
        descripcion: escuelaNueva.descripcion,
        pais: escuelaNueva.pais,
       
      });

      // Agrega las imágenes de la escuela a través de las relaciones de Sequelize (si es necesario)

      res.redirect("./escuelasList");
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear la escuela');
    }
  },


  list: async (req, res) => {
    try {
      // Consulta todas las escuelas desde la base de datos utilizando Sequelize
      const escuelasRegistradas = await db.escuela.findAll();
      res.render("escuelasList", { escuelasRegistradas });
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
            [db.Sequelize.Op.iLike]: `%${escuelaEncontrada}%`, // Búsqueda insensible a mayúsculas y minúsculas
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
      res.status(500).send('Error al obtener los detalles de la escuela');
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
        //GET renderiza la vista de edición con los detalles de la escuela
        res.render("editarEscuela", { escuela });
      } else if (req.method === "POST") {
        // POST actualiza los detalles de la escuela con los datos del formulario enviado
        await escuela.update({
          nombre: req.body.nombre,
          email: req.body.email,
          descripcion: req.body.descripcion,
          pais: req.body.pais,
    
        });

        res.redirect(`/escuelas/escuela-detalle/${escuelaId}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al editar la escuela');
    }
    
  },


};



module.exports = controller;
