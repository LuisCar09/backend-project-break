const express = require('express')
const router = express.Router()
const ApiControllers = require('../controllers/apiControllers') 

router.get('/',ApiControllers.getProducts)
router.get('/?=productId',ApiControllers.getProductsById)
module.exports = router