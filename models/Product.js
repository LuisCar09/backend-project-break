const mongoose = require('mongoose')



// ## Creación de modelo

// Vamos a crear el modelo de producto. El modelo de producto tendrá los siguientes campos:

// - Nombre
// - Descripción
// - Imagen
// - Categoría
// - Talla
// - Precio

// La categoría será un string que podrá ser "Camisetas", "Pantalones", "Zapatos", "Accesorios".

// La talla será un string que podrá ser "XS", "S", "M", "L", "XL".


const ProductSchema  = new mongoose.Schema({
    nombre :{
        type:String,
        required : true
    },
    description : {
        type: String,
        required:true,
        validate: {
            validator : function (v) {
                return v.length >= 15 && v.length <= 300 //length from 10 to 300 
            },
            message : 'Description must have between 15 and 300 characters'
        }
    },
    imagen : {
        type : String,
        required : true,
        validate:{
            validator: function(v) {
                const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i //regres to validate image url
                return imagePattern.test(v)
            },
            message:'Image must be a URL valid or a format ,.png, .jpeg, .jpg, .gif, .webp'
        }
    },
    categoria :{
        type : String,
        required : true,
        enum: {
            values : ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
            message: '{VALUE} is not a valid product'
        }
    },
    talla: {
        type: String,
        required: true,
        enum:{
            values : ["S","M","L","XL","XXL"],
            message: '{VALUE} is not a valid size'
        }
    },
    precio:{
        type: Number,
        required : true,
        min:[0,'The price must be greater than 0'] //validated if price is greater than zero
    },
    stock:{
        type : Number,
        required : true ,
        min: [0,"The stock cannot be negative"],
        default : 0 //it established 0 as default value
    }
},{timestamps:true})

ProductSchema.index({nombre: 1}) //Add an index to every product name, it improves the find method

const Product = mongoose.model('ProductsDB',ProductSchema)

module.exports = Product