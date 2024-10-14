const { schema } = require("../models/Product");


module.exports = {
    paths: {
        "/apiproducts/new": {
            post: {
                tags: [
                    "Product"
                ],
                description: "Create a product",
                operationId: "CreateProduct",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ProductBody"
                            }
                        },
                        example: {
                            name: "Camiseta Adicolor Outline Trefoil",
                            description: "Black winter boots, cozy and durable.",
                            image: "https://img.eobuwie.cloud/eob_product_660w_880h(0/c/e/8/0ce82c3b19971ae2e6d8d441983f12370c3b36db_20_5905588691891_ZZ.jpg,webp)/botines-lasocki-wi16-24474-02-negro-5905588691891.webp",
                            category: "Shoes",
                            size: "38",
                            price: 500,
                            stock: 2
                        }
                    },
                },
                responses: {
                    201: {
                        description: "Product created successfully"
                    },
                    500: {
                        description: "Server error"
                    }
                }
            }
        },"/apiproducts": {
            get: {
                tags: ["Read Products"],
                description: "Read products",
                operationId: "readProducts",
                parameters: [
                    {
                        name: "_id",
                        in:"query", //buscara en el query si pasan params
                        description : "product ID"
                    }
                ],
                responses: {
                    200: {
                        description: "Task read successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Product"
                                },
                            },
                            example: {
                                "_id": "670d92094079817b994587d8",
                                "name": "Nike T-Shirt",
                                "description": "Soft t-shirt made by an important designer",
                                "image": "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg",
                                "category": "T-Shirts",
                                "size": "XL",
                                "price": 1000,
                                "stock": 5,
                                "createdAt": "2024-10-14T21:50:01.194Z",
                                "updatedAt": "2024-10-14T21:50:01.194Z",
                                "__v": 0
                              }
                        },
                        
                    },
                    500: {
                        description: "Server Error"
                    },
                }
            }
        },
        '/apiproducts/edit/{productId}': {
            put:{
                tags : ["Edit Product"],
                description :["Product modify by ID"],
                operationId : "ModifyProductById",
                parameters:[
                    {
                        name : "productId",
                        in : "path",
                        description :"ID of product to retrieved and modify",
                        required : true
                    }
                ],
                requestBody:{
                    content :{
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/UpdateProductBody"
                            }
                        },
                        example: {
                            name: "Camiseta Adicolor Outline Trefoil",
                            description: "Black winter boots, cozy and durable.",
                            image: "https://img.eobuwie.cloud/eob_product_660w_880h(0/c/e/8/0ce82c3b19971ae2e6d8d441983f12370c3b36db_20_5905588691891_ZZ.jpg,webp)/botines-lasocki-wi16-24474-02-negro-5905588691891.webp",
                            category: "Shoes",
                            size: "38",
                            price: 500,
                            stock: 2
                        }
                    }
                },
                responses:{
                    200:{
                        description : "Product has been modified"
                    },
                    500:{
                        description : "Error server"
                    }
                }
            }
        },
        '/apiproducts/delete/{productId}': {
            delete:{
                tags : ["Delete Product"],
                description :["Product modify by ID"],
                operationId : "ModifyProductById",
                parameters:[
                    {
                        name : "productId",
                        in : "path",
                        description :"ID of product to retrieved and modify",
                        required : true
                    }
                ],
                requestBody:{
                    content :{
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/DeleteProductBody"
                            }
                        },
                        example: {
                            name: "Camiseta Adicolor Outline Trefoil",
                            description: "Black winter boots, cozy and durable.",
                            image: "https://img.eobuwie.cloud/eob_product_660w_880h(0/c/e/8/0ce82c3b19971ae2e6d8d441983f12370c3b36db_20_5905588691891_ZZ.jpg,webp)/botines-lasocki-wi16-24474-02-negro-5905588691891.webp",
                            category: "Shoes",
                            size: "38",
                            price: 500,
                            stock: 2
                        }
                    }
                },
                responses:{
                    200:{
                        description : "Product has been delete"
                    },
                    500:{
                        description : "Error server"
                    }
                }
            }
        }
    }
}