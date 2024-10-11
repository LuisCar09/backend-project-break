// - showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
// - createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - showEditProduct: Devuelve la vista con el formulario para editar un producto.
// - updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
// - deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.
const { renderProducts, navbar,itemCart,showProducts,comesFromDashboard,form } = require('../public/utils/index')
const Product = require('../models/Product')
const path = require('path')
const admin = require('firebase-admin');
const auth = admin.auth();


const authDashboardControllers = {
    showNewProduct :async(req,res) => {
        const isFromDashboard = comesFromDashboard(req.originalUrl,'dashboard')

        const template = showProducts(navbar(isFromDashboard),form('POST'))
        res.send(template)
    },
    createProduct : async(req,res) => {
    
        try {
            const productFeatures = req.body
            const productCreated = await Product.create(productFeatures)
            res.redirect('/dashboard')
        } catch (error) {
            res.status(500).json({'There was a problem creating a product': error.message})
            
            
        }
    },
    showEditProduct :async(req,res) => {
        
        const productId = req.params.productId
        const isFromDashboard = comesFromDashboard(req.originalUrl,'dashboard')
        try {
            const product = await Product.findById(productId)
            const template = showProducts(navbar(isFromDashboard),form('PUT',product))
            res.send(template)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },
    updateProduct :async(req,res) => {
        const productProperties = req.body
        try {
            const product = await Product.findByIdAndUpdate(req.body.idProduct,{...productProperties},{new:true})
            res.status(200).json({success: 'successfully'})
        } catch (error) {
            res
            .status(500)
            .json({error:error.message})
        }
    },
    deleteProduct :async(req,res) => {
        const idProduct = req.body.idProduct

        try {
            const productDeleted = await Product.findByIdAndDelete(idProduct)
            
            res.status(200).json({success: 'successfully'})
        } catch (error) {
            res
            .status(500)
            .json({error:error.message})
        }
    },
    getRegister: async(req,res)=>{
        
        res.sendFile(path.join(__dirname,'../public/views','register.html'))
    },
    register : async(req,res) => {
        try {
            const {email,password} = req.body
            if (!email || !password) {
                res.redirect('/login')
            }
            await auth.createUser({email,password})
            res.redirect('/login')
        } catch (error) {
            console.log('Error from server: ' + error.message);
            
            res.status(401).redirect('/register')
            
        }
    },
    getLogin:async(req,res)=> {
        res.sendFile(path.join(__dirname,"../public/views",'login.html'))
    },
    postLogin : async(req,res) => {
        const {idToken} = req.body
        
        try {
            await auth.verifyIdToken(idToken)
            res.cookie('token',idToken,{httpOnly:true,secure:false})
            res.json({success:true})
        } catch (error) {
            console.error('Error auth');
            res.status(401).json({error:'Invalid token'})
        }
    },
    postLogOut : async(req,res) => {
        
        res.clearCookie('token')
        res.status(200).json({"success" : true})
    }
    
}

module.exports = authDashboardControllers