const controladorUsers =
{
  iniciarSesion: (req, res) => {
    res.render("login");
  },

  registrarse: (req, res) => {
    res.render("register");
  },
  create: (req, res) => {
    res.send(req.body)
  },



  list: (req, res) => {
    let usuarios = [
      { id: 1,name: 'Cyclone'},
      { id: 2, name: 'Piratas de Geriba' },
      { id: 3, name: 'Bai Bai' },
      { id: 4, name: 'AFT Amantes' },
      
      ];

    res.render("userList", { "usuarios": usuarios });
  },

  buscarUsuario: function (req, res) {
    let usuarioEncontrado = req.query.buscar;

    let usuarios = [
      { id: 1, name: 'Cyclone' },
      { id: 2, name: 'Piratas de Geriba' },
      { id: 3, name: 'Bai Bai' },
      { id: 4, name: 'AFT Amantes' },
    ];

    let usersResults = [];

    for (let i = 0; i < usuarios.lenght; i++) {
      if (usuarios[i].name.includes(usuarioEncontrado)) {
        usersResults.push(usuarios[i]);
      }
    }

    res.render('usuariosBuscados', { 'usersResults': usersResults });

  }

}


module.exports = controladorUsers;
