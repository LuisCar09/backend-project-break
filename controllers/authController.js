// - showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
// - createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - showEditProduct: Devuelve la vista con el formulario para editar un producto.
// - updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.

const DashboardControllers = {
    showNewProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    },
    createProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    },
    showEditProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    },
    updateProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    },
    deleteProduct :async(req,res) => {
        res.send('<h1>Luis le Grand Dashboard</h1>')
    }
}

module.exports = DashboardControllers