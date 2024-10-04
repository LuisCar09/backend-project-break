const express = require('express')
const router = express.Router()
const ProductsControllers  = require('../controllers/productController')
// - GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
// - GET /products/:productId: Devuelve el detalle de un producto.


router.get('/',ProductsControllers.showProducts)

router.get('/product/:productId',ProductsControllers.showProductById)

router.use((req,res)=>{
    res.send('<h1>Page not found</h1>')
})

module.exports = router