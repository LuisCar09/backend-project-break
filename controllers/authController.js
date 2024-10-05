// - showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
// - createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - showEditProduct: Devuelve la vista con el formulario para editar un producto.
// - updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.
const { renderProducts, navbar,itemCart,showProducts,comesFromDashboard,form } = require('../public/utils/index')

const authDashboardControllers = {
    showNewProduct :async(req,res) => {
        const template = showProducts(navbar(),form('POST'))
        res.send(template)
    },
    createProduct :async(req,res) => {
        const data = req.body
        console.log(data);
        
        
        res.send('OK!')
    },
    showEditProduct :async(req,res) => {
        const template = showProducts(navbar(),form('PUT'))
        res.send(template)
    },
    updateProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    },
    deleteProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    }
}

module.exports = authDashboardControllers