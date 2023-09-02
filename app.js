const express = require('express');
const db = require('./src/database/models'); // Importa tus modelos de Sequelize

// Sincroniza los modelos con la base de datos

const productosRoutes = require('./src/routes/productosRoutes');
const usersRoutes = require ('./src/routes/usersRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const escuelasRoutes = require('./src/routes/escuelasRoutes')

const app = express ();
const path = require ('path');
const methodOverride = require('method-override');
const session = require('express-session');


app.use(express.static(path.resolve(__dirname, './public')));

app.set ('view engine', 'ejs');

app.use(express.urlencoded({extended: false})) //configuracion de express para seguridad de la info (post)
app.use(express.json()) //capturar lo que venga de un formulario en un objeto literal
app.use(methodOverride("_method"))
app.use (session({secret:"clave secreta",
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

