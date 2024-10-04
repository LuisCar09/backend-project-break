
const path = require('path')
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

const products = [{name:'Camisetas',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:2},{name:'Pantalones',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:3},{name:'Zapatos',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:4},{name:'Accesorios',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:1},{name:'Camisetas',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:6},{name:'Pantalones',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:7}]

const ProductsControllers = {
    showProducts : async (req,res)=> {
        const name = req.query.category
        
        const html = name ? showProducts(navbar(),renderProducts(products.filter(product => product.name === name))) : showProducts(navbar(),renderProducts(products))
        
        res.send(html)
        
        
    },
    showProductById : async(req,res) => {
        const productId = parseInt(req.params.productId)
       
        const arrayFiltered = products.filter(product => product._id === productId)
        
        const html = showProducts(navbar(),renderProducts(arrayFiltered))
        
        res.send(html)
    }
}

module.exports = ProductsControllers