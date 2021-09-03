const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);  

const productosRoute = require('./rutas/productosRoute');

const puerto = 8080;
//handlebars
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

// //pug
// app.set('views', './viewsPug');
// app.set('view engine', 'pug');

// //ejs
// app.set('views', './viewsEjs');
// app.set('view engine', 'ejs');

http.listen(puerto, (err) => {
    if(err) throw new Error(`Error en servidor ${err}`);
    console.log("Servidor inicializado en " + puerto);
});



io.on('connection', (socket) => {
    console.log("usuario conectado");
})


app.use('/api/productos', productosRoute);