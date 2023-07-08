const controladorUsers =
{
  iniciarSesion: (req, res) => {
    res.render("users/login");
  },

  registrarse: (req, res) => {
    res.render("users/register");
  },


  list: function (req, res) {
    let usuarios = [
      { id: 1, name: 'Carolina'},
      { id: 2, name: 'Sofía' }
    ];

    res.render("userList", { "usuarios": usuarios });
  }
}

module.exports = controladorUsers;
