const fs = require('fs');

const path = require('path');

const escuelasFilePath = path.join(__dirname, '../../src/data/escuelas.json');

let escuelas = [];

if (fs.existsSync(escuelasFilePath)) {
  const fileContent = fs.readFileSync(escuelasFilePath, 'utf-8');

  if (fileContent) {
    escuelas = JSON.parse(fileContent);
  }
}


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

	    escuelas.push(objNuevaEscuela);
		fs.writeFileSync(escuelasFilePath, JSON.stringify(escuelas,null,' '));
    res.redirect("./escuelasList"); 
	},

  list: (req, res) => {
    res.render("escuelasList", { escuelasRegistradas: escuelas });
  },


buscarEscuela: (req, res) => {
  let escuelaEncontrada = req.query.buscar;
  let escuelaBuscada = [];

  for (let i = 0; i < escuelas.length; i++) {
    if (escuelas[i].email.includes(escuelaEncontrada))  {
      escuelaBuscada.push(escuelas[i]);
    }
  }

  console.log(escuelaBuscada);
  res.render("escuelasResults", { results: escuelaBuscada });
},



};


module.exports = controller;

     //res.render("escuelasList", { "escuelas": nuevaEscuela });





  

