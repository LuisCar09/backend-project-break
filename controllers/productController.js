
const path = require('path')
const Product = require('../models/Product')
const { renderProducts, navbar,itemCart,showProducts,comesFromDashboard } = require('../public/utils/index')



const ProductsControllers = {
    showProducts : async (req,res)=> {
        const category = req.query.category
        const path = req.originalUrl.split('/').find(e => e === 'dashboard')
        const isFromDashboard = comesFromDashboard(path)
        
        
        try {
            const products = await Product.find();
            const html = category ? showProducts(navbar(isFromDashboard),renderProducts(products.filter(product => product.category === category),isFromDashboard)) : showProducts(navbar(isFromDashboard),renderProducts(products,isFromDashboard))
            
            res.send(html)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
                        
        }
 
    },
    showProductById : async(req,res) => {
        
        
        const id = req.params.productId
        const path = req.originalUrl.split('/').find(e => e === 'dashboard')
        const isFromDashboard = comesFromDashboard(path)
        
        try {
            const product = await Product.findById(id)
            const html = showProducts(navbar(isFromDashboard),itemCart([product],isFromDashboard))
            res.send(html)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
        }
       
    },
    createProduct : async(req,res) => {
    
        try {
            const productFeatures = req.body
            const productCreated = await Product.create(productFeatures)
            res.status(200).json(productCreated)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
            
            
        }
    }
}

module.exports = ProductsControllers