const fs = require('fs');
const path = require('path');
const escuelasFilePath = path.join(__dirname, '../../src/data/escuelas.json');


//JSON CON LA LISTA DE ESCUELAS
let escuelas = [];

if (fs.existsSync(escuelasFilePath)) {
  const fileContent = fs.readFileSync(escuelasFilePath, 'utf-8');

  if (fileContent) {
    escuelas = JSON.parse(fileContent);
  } 
  
}

const getSchoolById = (schoolId) => {
  const foundSchool = escuelas.find((escuela) => escuela.id === schoolId);

  if (!foundSchool) {
    console.log(`School not found for ID: ${schoolId}`);
  }

  return foundSchool;
};

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

  sumaEscuela: (req, res) => {
    
    res.render("escuelascreate");
  },
//FORMULARIO ESCUELA NUEVA
	creaEscuela: (req, res) => {
   

    let escuelaNueva = req.body;
    let escuelaimgUpload = req.files;
//el form de escuela acepta varias fotos. Este array toma las fotos subidas y las envia al JSON
    let escuelaimagen = [];
    escuelaimgUpload.forEach((file) => {
      escuelaimagen.push({
        filename: file.filename,
      });
    });
  
		let objNuevaEscuela= {
      id: generarId(),
      nombre: escuelaNueva.nombre,
			email: escuelaNueva.email,
			descripcion: escuelaNueva.descripcion,
			imagen: escuelaimagen, //viene de la var creada en el paso anterior
      pais: escuelaNueva.pais,
		};

	  escuelas.push(objNuevaEscuela);
		fs.writeFileSync(escuelasFilePath, JSON.stringify(escuelas,null,' '));
    res.redirect("./escuelasList"); 

    function generarId() {

      const { v4: uuidv4 } = require('uuid');
      return uuidv4();
    }

	},
//VISTA DE LA LISTA DE ESCUELAS
  list: (req, res) => {
    res.render("escuelasList", { escuelasRegistradas: escuelas });
  },

//MÉTODO USADO PARA MOSTRAR LAS ESCUELAS FILTRADAS EN LA BARRA DE BÚSQUEDA DE LA VISTA ANTERIOR
buscarEscuela: (req, res) => {
  let escuelaEncontrada = req.query.buscar;
  let escuelasBuscadasArray = [];

  for (let i = 0; i < escuelas.length; i++) {
    if ( (escuelas[i].nombre.includes(escuelaEncontrada.toUpperCase())) 
    ||
    (escuelas[i].nombre.includes(escuelaEncontrada.toLowerCase()))
    
    )  {
      escuelasBuscadasArray.push(escuelas[i]);
    }
  }

  console.log(escuelasBuscadasArray);
  res.render("escuelasResults", { escuelasBuscadas: escuelasBuscadasArray });
},

idEscuela : (req, res) => {
  let escuelaId = req.params.id;
  
  let escuela = escuelas.find((escuela) => escuela.id === escuelaId);

  res.render('escuela-detalle', { escuela });
},




editarEscuela: (req, res) => {
  const escuelaId = req.params.id;
  const escuela = getSchoolById(escuelaId);

  if (!escuela) {
    return res.status(404).send("Escuela no encontrada");
  }

  if (req.method === "GET") {
    // Si la solicitud es GET, renderiza la vista de edición con los detalles de la escuela
    res.render("editarEscuela", { escuela });
  } else if (req.method === "POST") {
    // Si la solicitud es POST, actualiza los detalles de la escuela con los datos del formulario enviado
    escuela.nombre = req.body.nombre;
    escuela.email = req.body.email;
    escuela.descripcion = req.body.descripcion;
    escuela.imagen = req.body.imagen;
    escuela.pais = req.body.pais;

    // Guarda la lista de escuelas actualizada de nuevo en el archivo JSON
    fs.writeFileSync(escuelasFilePath, JSON.stringify(escuelas, null, " "));

    // Redirige a la página de detalle de la escuela con los detalles actualizados
    res.redirect(`/escuelas/escuela-detalle/${escuelaId}`);
  }
},
};








module.exports = controller;
 




  

