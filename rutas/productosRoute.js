const express = require('express');
const productosController = require('../controladores/productosController')

const router = express.Router();

router.route('/').get(productosController.catalogo);
router.route('/cargar').get(productosController.nuevoProd);

router.route('/:id')
.get(productosController.unProducto)
.put(productosController.modificarProd)
.delete(productosController.borrarProducto);

module.exports = router;