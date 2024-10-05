const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/authController')
const ProductsControllers  = require('../controllers/productController')

// - GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo. OK
router.get('/',ProductsControllers.showProducts)

// - POST /dashboard: Crea un nuevo producto. OK 
router.post('/dashboard',authControllers.createProduct)


// - GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo. OK
router.get('/dashboard/new:',authControllers.showNewProduct)


// - GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
router.get('/dashboard/:productId')

// - PUT /dashboard/:productId: Actualiza un producto.
router.put('/dashboard/:productId:',authControllers.updateProduct)

// - GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
router.get('/dashboard/:productId/edit',authControllers.showEditProduct)


// - DELETE /dashboard/:productId/delete: Elimina un producto.
router.delete('/dashboard/:productId/delete',)


module.exports = router