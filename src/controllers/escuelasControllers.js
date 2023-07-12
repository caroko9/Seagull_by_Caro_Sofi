
let escuelasController = 
{
  sumaEscuela: (req, res) => {
    res.render("escuelas");
  },

  creaEscuela: (req, res)=>{
    console.log(req.body)
  }

};

module.exports = escuelasController;