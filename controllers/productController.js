
const ProductsControllers = {
    showProducts : async (req,res)=> {
        res.send('<h1>Luis le Grand Products</h1>')
    },
    showProductById : async(req,res) => {
        res.send('<h1>Luis le Grand Product</h1>')
    }
}

module.exports = ProductsControllers