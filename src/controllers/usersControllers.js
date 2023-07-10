const controladorUsers =
{
  iniciarSesion: (req, res) => {
    res.render("login");
  },

  registrarse: (req, res) => {
    res.render("register");
  },


  list: (req, res) => {
    let usuarios = [
      { id: 1, name: 'Carolina'},
      { id: 2, name: 'Sofía' },
      ];

    res.render("userList", { "usuarios": usuarios });
  }
}

module.exports = controladorUsers;
