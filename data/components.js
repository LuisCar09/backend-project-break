

module.exports = {
    components : {
        schemas:{
            Product:{
                type: "object",
                properties:{
                    
                        "_id": {
                            type:"ObjectId",
                            description:"Product ID",
                            example:"6700626aa416e42ce2f77ce0"},
                        "name":{
                            type:"String",
                            description : "A product's title",
                            example:"Nike T-Shirt"
                        },
                        "description":{ 
                            type:"String",
                            description : "A product's description",
                            example:'"Soft t-shirt made by an important designer"'
                        },
                        "image": {
                            type:"String",
                            description : "An image to show products figure",
                            example : "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg"
                        },
                        "category": {
                            type:"String",
                            description : "Category name",
                            example :"T-Shirts",
                        },
                        "size": {
                            type:"String",
                            description : "A product's size",
                            example : "XL"
                        },
                        "price": {
                            type:"Number",
                            description : "A product's price",
                            example : 1000
                        }
                        ,
                        "stock": {
                            type:"Number",
                            description : "A product's stock",
                            example : 5
                        }
                        
                        
                    
                }
            },
            ProductBody:{
                type: "object",
                properties:{
                    
                       
                        name:{
                            type:"String",
                            description : "A product's title",
                            example:"Nike T-Shirt"
                        },
                        description:{ 
                            type:"String",
                            description : "A product's description",
                            example:'"Soft t-shirt made by an important designer"'
                        },
                        image: {
                            type:"String",
                            description : "An image to show products figure, the format must be a .jpg, .png, .webp, .jpeg, .gif",
                            example : "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg"
                        },
                        category: {
                            type:"String",
                            description : "Category name",
                            example :"T-Shirts",
                        },
                        size: {
                            type:"String",
                            description : "A product's size",
                            example : "XL"
                        },
                        price: {
                            type:"Number",
                            description : "A product's price",
                            example : 1000
                        }
                        ,
                        stock: {
                            type:"Number",
                            description : "A product's stock",
                            example : 5
                        }
                        
                },
                required: ["name", "description", "category", "price", "stock"]
            },
            UpdateProductBody:{
                type: "object",
                properties:{

                        apiKey:{
                            type :"string",
                            description: "hash unlock key",
                            example : "9a01dbbd98a8e40aef14e06d18154fcb8a1d0deec8b932ff7c12b4940e915c52a619ab2f1e2a059feca8e8c13258e399e24d8578d222a317cc269f9577d29973",
                        },
                        name:{
                            type:"String",
                            description : "A product's title",
                            example:"Nike T-Shirt"
                        },
                        description:{ 
                            type:"String",
                            description : "A product's description",
                            example:'"Soft t-shirt made by an important designer"'
                        },
                        image: {
                            type:"String",
                            description : "An image to show products figure, the format must be a .jpg, .png, .webp, .jpeg, .gif",
                            example : "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg"
                        },
                        category: {
                            type:"String",
                            description : "Category name",
                            example :"T-Shirts",
                        },
                        size: {
                            type:"String",
                            description : "A product's size",
                            example : "XL"
                        },
                        price: {
                            type:"Number",
                            description : "A product's price",
                            example : 1000
                        }
                        ,
                        stock: {
                            type:"Number",
                            description : "A product's stock",
                            example : 5
                        }
                        
                },
                required: ["name", "description", "category", "price", "stock"]
            },
            DeleteProductBody:{
                type: "object",
                properties:{

                        apiKey:{
                            type :"string",
                            description: "hash unlock key",
                            example : "9a01dbbd98a8e40aef14e06d18154fcb8a1d0deec8b932ff7c12b4940e915c52a619ab2f1e2a059feca8e8c13258e399e24d8578d222a317cc269f9577d29973",
                        },
                        
                        
                },
                required: ["name", "description", "category", "price", "stock"]
            }
        }
    }
}