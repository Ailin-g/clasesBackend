const express = require('express');


const app = express();
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log("Servidor inicializado.");
});

app.get('/api/productos', async (req, res) => {
    try {
        const productos = await info;
        res.json({
            productos: productos
        })
    } catch (error) {
        console.log(error)
    }
});

app.get('api/productos/:id', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
})

app.post('api/productos', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})