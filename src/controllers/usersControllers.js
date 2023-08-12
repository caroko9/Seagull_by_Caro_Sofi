const fs = require ('fs');
const path = require('path');
const { validationResult} = require('express-validator');
let bcrypt = require('bcryptjs');

const usuariosFilePath = path.join(__dirname, '../../src/data/usuarios.json');


let usuarios = []

if (fs.existsSync(usuariosFilePath)) {
  const fileContent = fs.readFileSync(usuariosFilePath, 'utf-8');

  if (fileContent) {
    usuarios = JSON.parse(fileContent);
  }
}

const controladorUsuario =
{
  iniciarSesion: (req, res) => {
    res.render("login");
  },

  register: (req, res) => {
    res.render("register");
  
  },


  create: (req, res) => {

    const resultValidation = validationResult(req);

    if ( resultValidation.errors.length > 0) {
   return res.render('register', {
   errors : resultValidation.mapped(),
   oldData : req.body //para mantener la data ingresada visible en caso de que haya un error al completar el form
   });
 }
    
    let nuevosUsuarios = req.body;
    let imgperfilUpload = req.file.filename;
    
    let objetoUsuariosNuevos =  {
      nombre: nuevosUsuarios.nombre,
      email: nuevosUsuarios.email,
      contrasena: bcrypt.hashSync (nuevosUsuarios.contrasena, 10),
      repetir_contrasena: nuevosUsuarios.repetir_contrasena,
      telefono: nuevosUsuarios.telefono,
      imagenPerfil: imgperfilUpload,
    };


    usuarios.push(objetoUsuariosNuevos)
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null,' '));
    res.redirect("/");
  }
  
}


module.exports = controladorUsuario;
