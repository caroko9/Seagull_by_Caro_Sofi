const express = require('express');

const productosRoutes = require('./src/routes/productosRoutes');
const usersRoutes = require ('./src/routes/usersRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const escuelasRoutes = require('./src/routes/escuelasRoutes')

const app = express ();

const path = require ('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.set ('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use ('/productos', productosRoutes);
app.use('/users', usersRoutes); 
app.use('/', mainRoutes);
app.use('/escuelas', escuelasRoutes);



app.use ('*', function (req, res){
  res.send("ruta erronea")
});

app.listen(3002, () => console.log('Esto fue exitoso'));

