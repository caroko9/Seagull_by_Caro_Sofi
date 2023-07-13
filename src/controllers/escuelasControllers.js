const fs = require('fs');

const path = require('path');

const escuelasFilePath = path.join(__dirname, '../../src/data/escuelas.json');


const escuela = JSON.parse(fs.readFileSync(escuelasFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

  sumaEscuela: (req, res) => {
    res.render("escuelascreate");
  },

	creaEscuela: (req, res) => {

		let escuelaNueva = req.body;
	
		let objNuevaEscuela= {
			email: escuelaNueva.email,
			descripcion: escuelaNueva.descripcion,
			imagen: escuelaNueva.imagen,
      pais: escuelaNueva.pais,
		};

	    escuela.push(objNuevaEscuela);
		fs.writeFileSync(escuelasFilePath, JSON.stringify(escuela,null,' '));
		res.redirect('/');
	},
}

module.exports = controller;
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




