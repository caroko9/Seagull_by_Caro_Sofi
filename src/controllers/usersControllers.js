const fs = require('fs');

const path = require('path');

const usuariosFilePath = path.join(__dirname, '../../src/data/usuarios.json');

let usuarios = []

if (fs.existsSync(usuariosFilePath)) {
  const fileContent = fs.readFileSync(usuariosFilePath, 'utf-8');

  if (fileContent) {
    usuarios = JSON.parse(fileContent);
  }
}

const controladorUsers =
{
  iniciarSesion: (req, res) => {
    res.render("login");
  },

  register: (req, res) => {
    res.render("register");
  },

  create: (req, res) => {
    let nuevosUsuarios = req.body
    
    let objetoUsuariosNuevos =  {
      nombre: nuevosUsuarios.nombre,
      email: nuevosUsuarios.email,
      contraseña: nuevosUsuarios.contraseña,
      repetir_contraseña: nuevosUsuarios.repetir_contraseña,
      telefono: nuevosUsuarios.telefono
    }  
    usuarios.push(objetoUsuariosNuevos)
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null,' '));
    res.redirect("/"); 
  },
  

  list: (req, res) => {
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

   let escuelas = [
      { id: 1, name: 'Cyclone' },
      { id: 2, name: 'Piratas de Geriba' },
      { id: 3, name: 'Bai Bai' },
      { id: 4, name: 'AFT Amantes' }
    ];

     let escuelaBuscada = [];

    for (let i = 0; i < escuelas.lenght; i++) {
      if (escuelas[i].name.includes(escuelaEncontrada)) {
      escuelaBuscada.push(escuelas[i]);
      }
    }
 // console.log(escuelaBuscada);
res.render("escuelasResults", { "escuelasResults": escuelaBuscada });
  }

}

module.exports = controladorUsers;
