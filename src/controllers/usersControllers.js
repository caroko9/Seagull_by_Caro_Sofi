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
