const mongoose = require('mongoose')
const Product = require('../models/Product') 
require('dotenv').config()


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database has been connected.`);
        
    } catch (error) {
        throw new Error ('There was a problem trying to connect with database')
        
    }
    
}

module.exports = dbConnection