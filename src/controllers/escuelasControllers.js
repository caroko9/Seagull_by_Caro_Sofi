const db = require('../database/models');
const { escuela } = require('../database/models'); 

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
        descripcion: escuelaNueva.descripcion,
        pais: escuelaNueva.pais,
        imagen: imagenCloudinaryURL, 
      });
      
      res.redirect("./escuelasList");
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al crear la escuela: ${error.message}`);
    }
  },

  list: async (req, res) => {
    try {
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
        res.render("editarEscuela", { escuela });
      } else if (req.method === "POST") {
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
