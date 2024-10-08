const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/authController')
const ProductsControllers  = require('../controllers/productController')
const verifyTokenMiddleware = require('../middlewares/authMiddleware')
// - GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo. OK
router.get('/',verifyTokenMiddleware,ProductsControllers.showProducts) //OK

// - GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo. OK
router.get('/new',verifyTokenMiddleware,authControllers.showNewProduct) //OK!


// - POST /dashboard: Crea un nuevo producto. OK 
router.post('/new',verifyTokenMiddleware,authControllers.createProduct)


// - GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
router.get('/:productId',verifyTokenMiddleware,ProductsControllers.showProductById) //OK!

// - PUT /dashboard/:productId: Actualiza un producto.
router.put('/:productId',verifyTokenMiddleware,authControllers.updateProduct) //OK!

// - GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
router.get('/:productId/edit',verifyTokenMiddleware,authControllers.showEditProduct) //OK!


// - DELETE /dashboard/:productId/delete: Elimina un producto.
router.delete('/:productId/delete',authControllers.deleteProduct) //OK

// - Login


module.exports = router