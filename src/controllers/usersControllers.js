const fs = require ('fs');
const path = require('path');
const { validationResult} = require('express-validator');
let bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');



const usuariosFilePath = path.join(__dirname, '../../src/data/usuarios.json');


let usuarios = []

if (fs.existsSync(usuariosFilePath)) {
  const fileContent = fs.readFileSync(usuariosFilePath, 'utf-8');

  if (fileContent) {
    usuarios = JSON.parse(fileContent);
  }
}
let contadorId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
const controladorUsuario =

{

  obtenerUsuario: (req, res) => {
    const userId = req.params.userId; // Obtener el ID del usuario de los parámetros de la URL
  
    // Buscar el usuario por su ID en el arreglo de usuarios
    const usuario = usuarios.find(user => user.id === userId);
  
    if (!usuario) {
      return res.status(404).send('Usuario no encontrado');
    }
  
    res.render('perfil', { usuario: usuario });
  }
,  

  iniciarSesion: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    let errorsValidation = validationResult(req);

    if (errorsValidation.errors.length > 0) {
        return res.render('login', {
            errors: errorsValidation.array(), // Pasar los errores a la vista
            oldData: req.body,
        });
    }

  
    const fileContent = fs.readFileSync(usuariosFilePath, 'utf-8');
    const usuarios = JSON.parse(fileContent);
  
    let usuarioAloguearse = null;
  
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === req.body.email) {
        if (bcrypt.compareSync(req.body.contrasena, usuarios[i].contrasena)) {
          usuarioAloguearse = usuarios[i];
          break;
        }
      }
    }
  
    if (usuarioAloguearse === null) {
      return res.render('login', { errors: errorsValidation.array() }); // Pasar los errores a la vista
    }
  
    req.session.usuarioLogueado = usuarioAloguearse;
    res.redirect(`/users/perfil?userId=${usuarioAloguearse.id}`);
  }
  
,  

  register: (req, res) => {
    res.render("register");
  
  },

  perfil: (req, res) => {
    const userId = req.params.userId;
    const usuario = usuarios.find(user => user.id === userId);
  
    if (!usuario) {
      return res.status(404).send('Usuario no encontrado');
    }
  
    res.render('perfil', { usuario: usuario });
  },
  


  create: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render('register', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let nuevosUsuarios = req.body;
    let imgperfilUpload = req.file.filename;

    // Generar el ID incrementado con formato "0001"
    let idIncremental = contadorId.toString().padStart(4, '0');
    contadorId++;

    let objetoUsuariosNuevos = {
      id: idIncremental,
      nombre: nuevosUsuarios.nombre,
      email: nuevosUsuarios.email,
      contrasena: bcrypt.hashSync(nuevosUsuarios.contrasena, 10),
      repetir_contrasena: nuevosUsuarios.repetir_contrasena,
      telefono: nuevosUsuarios.telefono,
      imagenPerfil: imgperfilUpload,
    };
    
    usuarios.push(objetoUsuariosNuevos);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null,' '));
    res.redirect("/");
  }
}

module.exports = controladorUsuario;
