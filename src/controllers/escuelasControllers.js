let escuelasController = 
{
  sumaEscuela: (req, res) => {
    res.render("escuelascreate");
  },


  creaEscuela: (req, res) => {
  
    let escuelasRegistradas = {
      email: req.body.email,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen,
      pais: req.body.pais,
    }
    //GUARDARLO EN UN JSON
     
     res.redirect("listado");
  },

 
  list: (req, res) => {
  let nuevaEscuela = req.query.escuelaCreada;
  res.send ('Escuela ingresada con éxito!');
  }
} 

module.exports = escuelasController;



//CÓDIGO PARA USAR EN LA BARRA DE BUSQUEDA DE ESCUELAS

     /*res.render("escuelasList", { "escuelas": nuevaEscuela });
  }
  },

  buscarEscuela: function (req, res) {
    let escuelaEncontrada = req.query.buscar;
    res.send (escuelaEncontrada);

   let escuelas = [
      {  

      }
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




