const Product = require('../models/Product')
const {findProductByAny} = require('../public/utils/apiFunctions')

const ApiControllers = {
    getProducts : async (req,res) => {
        const queryValue = req.query
        
        const objetGreaterThanZero = Object.keys(queryValue).length === 0 
        try {
            const findByAny = !objetGreaterThanZero ?  await findProductByAny(queryValue) : await Product.find() 
            //console.log(findByAny);
            
            res.status(200).json(findByAny)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },
    getProductsById : async (req,res) => {
        const {productId} = req.params
        try {
            console.log(productId);
            
            const products = await Product.findById(productId)
            
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },
    updateById : async (req,res) => {
        const {productId} = req.params
        try {
            console.log(productId);
            
            const products = await Product.findById(productId)
            
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
    
}

module.exports = ApiControllers