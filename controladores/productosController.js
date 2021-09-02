const Producto = require("../productos/Productos");

const productos = new require('../productos/Productos');

const catalogoProductos = [];

exports.catalogo = async (req, res) => {
    try {
            res.render("productos",{ listaProductos: catalogoProductos, hayProductos: true})
            //pug
            // res.render("productos.pug",{ listaProductos: catalogoProductos, hayProductos: true})
            //ejs
            // res.render("productos.ejs",{ listaProductos: catalogoProductos, hayProductos: true})
    } catch (error) {
        console.log(error)
    }
};

exports.unProducto = async (req, res) => {
    try {
            const producto = await catalogoProductos.filter(req.params.id === catalogoProductos[parseInt(req.params.id) - 1].id);
            res.render("productos",{ listaProductos: catalogoProductos, hayProductos: true});
            //pug
            // res.render("productos.pug",{ listaProductos: catalogoProductos, hayProductos: true});
            // //ejs
            // res.render("productos.ejs",{ listaProductos: catalogoProductos, hayProductos: true});

    } catch (error) {
        console.log(error);
    }
}

exports.nuevoProd = async (req, res, next) => {
    try {
        let res_body = {
            nombre: body.nombre_producto,
            precio: body.precio_producto,
            thumbnail: body.thumbnail_producto
        }
        res.render("nuevoProd", res_body);
        catalogoProductos.push(new Producto(res_body.nombre, res_body.precio, res_body.thumbnail));

        // //pug
        // res.render("nuevoProd.pug", {carga: true});
        // //ejs
        // res.render("nuevoProd.ejs", {carga: true});
    } catch (error) {
        console.log(error);
    }
}

exports.modificarProd = async (req, res) => {
    try {
        const posicionProducto = catalogoProductos.findIndex(el => {
            el.id === parseInt(req.params.id);
        })
        catalogoProductos.splice(posicionProducto, 1, productoModificado)
    } catch (error) {
        console.log(error);
    }
}

exports.borrarProducto = async (req, res) => {
    try {
        const posicionProducto = catalogoProductos.findIndex(el => {
            el.id === parseInt(req.params.id);
        })
        catalogoProductos.splice(posicionProducto, 1);
    } catch (error) {
        console.log(error);
    }
}