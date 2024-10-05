
const path = require('path')
const Product = require('../models/Product')
const { renderProducts, navbar } = require('../public/utils/index')

const showProducts = (navbar, products) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/styles/styles.css">
                <title>Web Store</title>
            </head>
            <body>
                <main id="main-container" class='main-container'>
                    <header id="header-top" class='header-top'>
                        ${navbar}
                        
                    </header>
                    <article id="products-container" class='products-container' >
                       ${products}
                    </article>
                </main>
                <script src="../utils/index.js"></script>
            </body>
            </html>
            `
}

const comesFromDashboard = (path)=>{
    return path === 'dashboard' ? true : false
}

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
            const html = showProducts(navbar(isFromDashboard),renderProducts([product],isFromDashboard))
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