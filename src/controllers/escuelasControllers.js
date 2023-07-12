let escuelasController = 
{
  sumaEscuela: (req, res) => {
    res.render("escuelascreate");
  },


  creaEscuela: (req, res) => {
    res.send(req.body);
    // mensaje cuando la escuela termina de completar el form.
  //no esta llenando con ningún dato! importante para ver
    // res.send(req.body);
  }
}
    
   /* let escuelas = {
      pais: req.body.pais,
      email: req.body.email,
    }
    res.send(escuelas);
  },

  //listado de escuelas que se iran agregando del formulario de crear escuela
   /*list: (req, res) => {
   let escuelas = [
      { id: 1,name: 'Cyclone', pais: 'Brasil', email: 'wdwdw@gmail.com'},
      { id: 2, name: 'Piratas de Geriba', pais: 'Brasil', email: 'wdedw@gmail.com'},
      { id: 3, name: 'Bai Bai', pais: 'Argentina', email: 'wdwuuw@gmail.com'},
      { id: 4, name: 'AFT Amantes', pais: 'Argentina', email: 'cowdw@gmail.com' },
      
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
res.render("escuelasResults", { "results": escuelaBuscada });
  }*/




module.exports = escuelasController;