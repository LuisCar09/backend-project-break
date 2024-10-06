
const path = require('path')
const Product = require('../models/Product')
const { renderProducts, navbar,itemCart,showProducts,comesFromDashboard } = require('../public/utils/index')



const ProductsControllers = {
    showProducts : async (req,res)=> {
        const category = req.query.category
        const isFromDashboard = comesFromDashboard(req.originalUrl,'dashboard')
        
        
        try {
            const products = await Product.find();
            const html = category ? showProducts(navbar(isFromDashboard),renderProducts(products.filter(product => product.category === category),isFromDashboard)) : showProducts(navbar(isFromDashboard),renderProducts(products,isFromDashboard))
            
            res.send(html)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
                        
        }
 
    },
    showProductById : async(req,res) => {
        
        
        const productId = req.params.productId
        const isFromDashboard = comesFromDashboard(req.originalUrl,'dashboard')
        
        try {
            const product = await Product.findById(productId)
            const html = showProducts(navbar(isFromDashboard),itemCart([product],isFromDashboard))
            res.send(html)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
        }
       
    }
}

module.exports = ProductsControllers