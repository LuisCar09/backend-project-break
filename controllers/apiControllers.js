const Product = require('../models/Product')
const {findProductByAny} = require('../public/utils/apiFunctions')
require('dotenv').config()
const apiKey = process.env.apiModifyKey


const ApiControllers = {
    createProduct : async(req,res) => {
    
        try {
            const productFeatures = req.body
            const productCreated = await Product.create(productFeatures)
            res.status(201).json(productCreated)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
            
            
        }
    },
    getProducts : async (req,res) => {
        const queryValue = req.query
        
        const objetGreaterThanZero = Object.keys(queryValue).length === 0 
        try {
            const findByAny = !objetGreaterThanZero ?  await findProductByAny(queryValue) : await Product.find() 
           
            
            res.status(200).json(findByAny)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },
    getProductsById : async (req,res) => {
        const {productId} = req.params
        try {
            
            if (!productId) {
                res.status(401).json({error: "Should type a product id"})
            }
            
            const products = await Product.findById(productId)
            
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },
    updateById : async (req,res) => {
        const {productId} = req.params
        const apiPassword = req.body.apiKey
        
        
        
        const valuesToChange = req.body
        try {
            
            if (apiPassword === apiKey ) {
                
                const product = await Product.findByIdAndUpdate(productId,{...valuesToChange})
                
                
                res.status(200).json(product)
            }
            
            
            
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },
    deleteProduct :async(req,res) => {
        const {productId} = req.params
        
        
        const apiPassword = req.body.apiKey
        try {
            
            if (apiPassword === apiKey ) {
                
                const productDeleted = await Product.findByIdAndDelete(productId)
                
                
                res.status(200).json({success: 'delete successfully'})
            }
            
        } catch (error) {
            res
            .status(500)
            .json({error:error.message})
        }
    }
}

module.exports = ApiControllers