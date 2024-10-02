const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const productRoutes= require('./routes/productRoutes')
const dashboardRouters = require('./routes/authRoutes')
const dbConnection = require('./config/db')
dotenv.config()
const PORT = process.env.PORT ?? 4500


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Read static files
app.use(express.static(path.join(__dirname,"public")));

app.use('/products',productRoutes)
app.use('/dashboard',dashboardRouters)

dbConnection()
app.listen(PORT,()=>{
    console.log(`Server listening on port http://127.0.0.1:${PORT}`);
    
})