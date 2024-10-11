const mongoose = require('mongoose')

const ProductSchema  = new mongoose.Schema({
    name :{
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
    image : {
        type : String,
        required : true,
        validate:{
            validator: function(v) {
                const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i //regrex to validate image url
                return imagePattern.test(v)
            },
            message:'Image must be a URL valid or a format ,.png, .jpeg, .jpg, .gif, .webp'
        }
    },
    category :{
        type : String,
        required : true,
        enum: {
            values : ["T-Shirts", "Pants", "Shoes", "Accessories"],
            message: '{VALUE} is not a valid product'
        }
    },
    size: {
        type: String,
        required: true,
        enum:{
            values : ["S","M","L","XL","XXL","32","34","36","38","40","42"],
            message: '{VALUE} is not a valid size'
        }
    },
    price:{
        type: Number,
        required : true,
        min:[0,'The price must be greater than 0'] //minimum price zero
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