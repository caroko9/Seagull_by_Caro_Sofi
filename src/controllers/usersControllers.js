const fs = require('fs');
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
    errors : resultValidation.mapped()
    });
  }

    let nuevosUsuarios = req.body;
    let imgperfilUpload = req.file.filename;
    
    let objetoUsuariosNuevos =  {
      nombre: nuevosUsuarios.nombre,
      email: nuevosUsuarios.email,
      contraseña: bcrypt.hashSync(req.body.contraseña, 10),
      repetir_contraseña: nuevosUsuarios.repetir_contraseña,
      telefono: nuevosUsuarios.telefono,
      imagenPerfil: imgperfilUpload,
    };


    usuarios.push(objetoUsuariosNuevos)
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null,' '));
    res.redirect("/");
  },
  

 /* list: (req, res) => {
    let escuelas = [
      
      { id: 1,name: 'Cyclone'},
      { id: 2, name: 'Piratas de Geriba' },
      { id: 3, name: 'Bai Bai' },
      { id: 4, name: 'AFT Amantes' },
      
      ];

    res.render("escuelasList", { "escuelas": escuelas });
  },

   buscarEscuela: function (req, res) {
    let escuelaEncontrada = req.query.buscar;
    res.send (escuelaEncontrada);

     let escuelaBuscada = [];

    for (let i = 0; i < escuelas.lenght; i++) {
      if (escuelas[i].name.includes(escuelaEncontrada)) {
      escuelaBuscada.push(escuelas[i]);
      }
    }
 // console.log(escuelaBuscada);
res.render("escuelasResults", { "escuelasResults": escuelaBuscada });
  }*/

}

module.exports = controladorUsuario;
