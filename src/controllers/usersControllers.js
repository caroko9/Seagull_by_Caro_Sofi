const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models'); //Aca traemos a sequelize para interactuar con la db

const controladorUsuario = {
  homeAdministration: (req, res) => {
    res.render("homeAdmin");
  },

  obtenerUsuario: async (req, res) => {
    try {
      const userId = req.params.userId;
      const usuario = await db.usuario.findByPk(userId);

      if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
      }

      res.render('perfil', { usuario: usuario });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el usuario');
    }
  },

  iniciarSesion: (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {
    try {
      const errorsValidation = validationResult(req);

      if (errorsValidation.errors.length > 0) {
        return res.render('login', {
          errors: errorsValidation.array(),
          oldData: req.body,
        });
      }

      const { email, contrasena } = req.body;

      const usuario = await db.usuario.findOne({
        where: {
          email: email,
        },
      });

      if (!usuario || !bcrypt.compareSync(contrasena, usuario.contrasena)) {
        return res.render('login', { errors: [{ msg: 'Credenciales inválidas' }] });
      }

      req.session.usuarioLogueado = usuario;
      res.redirect('/users/homeAdmin');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al procesar la solicitud');
    }
  },

  register: (req, res) => {
    res.render("register");
  },

  perfil: async (req, res) => {
    try {
      const userId = req.params.userId;
      const usuario = await db.usuario.findByPk(userId);

      if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
      }

      res.render('perfil', { usuario: usuario });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el usuario');
    }
  },

  create: async (req, res) => {
    try {
      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {
        return res.render('register', {
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      }

      const { nombre, email, contrasena } = req.body;


      await db.usuario.create({
        nombre: nombre,
        email: email,
        contrasena: hashedPassword,
      });

      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el usuario');
    }
  },

};



module.exports = controladorUsuario;





