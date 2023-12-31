const express = require('express');
const db = require('./src/database/models'); 

const productosRoutes = require('./src/routes/productosRoutes');
const usersRoutes = require ('./src/routes/usersRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const escuelasRoutes = require('./src/routes/escuelasRoutes')

const app = express ();
const path = require ('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');

//EXPRESS VALIDATOR
//const { query } = require('express-validator');

//Para llamar a las apis desde mi proyecto de front.
app.use(
  cors({
    origin:"*" //el asterisco indica que puedo hacer llamadas de todos lados
  })
)

app.use(express.static(path.resolve(__dirname, './public')));

app.set ('view engine', 'ejs');

app.use(express.urlencoded({extended: false})) /
app.use(express.json()) 
app.use(methodOverride("_method"))
app.use (session({secret:"clave secreta", //middleware: ejecutamos la propiedad session para que  la info que guardamos en la compu del usuario, sea más segura.
resave:false,
saveUninitialized:false,
}))

db.sequelize.sync()
  .then(() => {
    console.log('Tablas de la base de datos sincronizadas');
  })
  .catch((error) => {
    console.error('Error al sincronizar las tablas:', error);
  });


app.use ('/productos', productosRoutes);
app.use('/users', usersRoutes); 
app.use('/', mainRoutes);
app.use('/escuelas', escuelasRoutes);

app.use ('*', function (req, res){
  res.send("ruta erronea")
});

app.listen(3002, () => console.log('Esto fue exitoso'));

