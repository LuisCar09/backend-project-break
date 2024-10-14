const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const {serviceAccount} = require('./config/firebase')
const admin = require('firebase-admin')
const dbConnection = require('./config/db')
const cookieParser = require('cookie-parser');
const cors = require("cors")
dotenv.config()
const PORT = process.env.PORT ?? 4500

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const app = express()
const productRoutes= require('./routes/productRoutes')
const dashboardRoutes = require('./routes/authRoutes')
const apiRoutes = require('./routes/productsApi')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
//Read static files
app.use(express.static(path.join(__dirname,"public")));

app.use('/',productRoutes)

app.use('/dashboard',dashboardRoutes)

app.use('/apiproducts',apiRoutes)

app.use((req,res)=>{
    res.send('<h1>Page not found</h1>')
})
dbConnection()
app.listen(PORT,()=>{
    console.log(`Server listening on port http://127.0.0.1:${PORT}`);
    
})