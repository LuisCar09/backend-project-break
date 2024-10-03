
const path = require('path')
const { renderProducts, navbar } = require('../public/utils/index')

const showProducts = (navbar, products) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Web Store</title>
            </head>
            <body>
                <main id="main-container">
                    <header id="header-top">
                        ${navbar}
                        
                    </header>
                    <article id="products-container">
                       ${products}
                    </article>
                </main>
                <script src="../utils/index.js"></script>
            </body>
            </html>
            `
}

const products = [{name:'SUPER',image:'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png',_id:2}]
const ProductsControllers = {
    showProducts : async (req,res)=> {
        
        const html = showProducts(navbar(),renderProducts(products),)
        
        res.send(html)
        //res.sendFile(path.join(__dirname,'../public/views','index.html'))
    },
    showProductById : async(req,res) => {
        res.send('<h1>Luis le Grand Product</h1>')
    }
}

module.exports = ProductsControllers