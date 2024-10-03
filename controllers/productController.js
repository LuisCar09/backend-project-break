
const path = require('path')
const ProductsControllers = {
    showProducts : async (req,res)=> {

        res.sendFile(path.join(__dirname,'../public/views','index.html'))
    },
    showProductById : async(req,res) => {
        res.send('<h1>Luis le Grand Product</h1>')
    }
}

module.exports = ProductsControllers