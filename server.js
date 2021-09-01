const express = require('express');
const handlebars = require('express-handlebars');

const productosRoute = require('./rutas/productosRoute');

const app = express();
const puerto = 8080;

app.engine(
    'hbs', 
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views'
    })
);

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"))

//pug
app.set('views', './viewsPug');
app.set('view engine', 'pug');

//ejs
app.set('views', '')

const server = app.listen(puerto, (err) => {
    if(err) throw new Error(`Error en servidor ${err}`);
    console.log("Servidor inicializado en " + puerto);
});

app.use('/api/productos', productosRoute);