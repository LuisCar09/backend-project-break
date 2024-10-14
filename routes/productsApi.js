const express = require('express')
const router = express.Router()
const ApiControllers = require('../controllers/apiControllers') 

router.get('/',ApiControllers.getProducts)
router.get('/?=productId',ApiControllers.getProductsById)
router.post('/new/',ApiControllers.createProduct)
router.put('/edit/:productId',ApiControllers.updateById)
router.delete('/delete/:productId',ApiControllers.deleteProduct)

module.exports = router