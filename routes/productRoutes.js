const express = require('express')
const router = express.Router()
const ProductsControllers  = require('../controllers/productController')
const authControllers = require('../controllers/authController')
// - GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
// - GET /products/:productId: Devuelve el detalle de un producto.


router.get('/',ProductsControllers.showProducts)

router.get('/product/:productId',ProductsControllers.showProductById)

router.get('/register',authControllers.getRegister)
router.post('/register',authControllers.register)


module.exports = router