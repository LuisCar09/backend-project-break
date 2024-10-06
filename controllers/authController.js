// - showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
// - createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - showEditProduct: Devuelve la vista con el formulario para editar un producto.
// - updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.
const { renderProducts, navbar,itemCart,showProducts,comesFromDashboard,form } = require('../public/utils/index')
const Product = require('../models/Product')
const authDashboardControllers = {
    showNewProduct :async(req,res) => {
        const template = showProducts(navbar(),form('POST'))
        res.send(template)
    },
    createProduct : async(req,res) => {
    
        try {
            const productFeatures = req.body
            console.log(productFeatures);
            
            
            const productCreated = await Product.create(productFeatures)
            res.status(200).json(productCreated)
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
            
            
        }
    },
    showEditProduct :async(req,res) => {
        
        const productId = req.params.productId
        const pathOriginal = req.originalUrl.split('/').find(e => e === 'dashboard')
        const isFromDashboard = comesFromDashboard(pathOriginal)
        
        
        
        
        try {
            const product = await Product.findById(productId)
            
            const template = showProducts(navbar(isFromDashboard),form('PUT',product))
            res.send(template)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },
    updateProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    },
    deleteProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    }
}

module.exports = authDashboardControllers