const express = require('express')
const router = express.Router()
const ApiControllers = require('../controllers/apiControllers') 

router.get('/',ApiControllers.getProducts) //DONE
router.get('/?=productId',ApiControllers.getProductsById) //DONE
router.post('/new/',ApiControllers.createProduct) //DONE
router.put('/edit/:productId',ApiControllers.updateById) //done
router.delete('/delete/:productId',ApiControllers.deleteProduct)

module.exports = router