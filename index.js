const express = require('express');

const app = express();
const puerto = 8080;

const productos = [];

const server = app.listen(puerto, () => {
    console.log("Servidor inicializado.");
});

app.get('/api/productos', async (req, res) => {
    try {
        const info = await productos;
        if(info !== []) {
            res.json({
                error: "No hay productos cargados"
            })
        } else {
            res.json({
                productos: info
            })
        }
    } catch (error) {
        console.log(error)
    }
});

app.get('api/productos/:id', async (req, res) => {
    try {
        if(req.params.id === productos[parseInt(req.params.id) - 1].id) {
            const producto = await productos.filter(req.params.id === productos[parseInt(req.params.id) - 1].id);
            res.json({
                producto: producto
            });
        } else {
            res.json({
                error: "No hay un producto con el id ingresado."
            })
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('api/productos/cargar', async (req, res) => {
    try {
        const nombre = prompt("Ingrese nombre del producto.");
        const precio = prompt("Ingrese precio del producto.");
        const thumbnail = prompt("Ingrese el nombre de la imagen del producto.");
        const id = productos.length() + 1;
        const nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: precio,
            thumbnail: thumbnail
        }
        productos.push(nuevoProducto);
        res.json({
            info: "El producto ha sido creado correctamente."
        });
    } catch (error) {
        console.log(error)
    }
})