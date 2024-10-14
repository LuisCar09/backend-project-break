const Product = require('../../models/Product')
const findProductByAny = async (type) => {
    const findThisProduct = Object.keys(type)[0]?.toLowerCase()
    const typeOfValues = ["_id", "name", "description", "image", "category", "size", "price"]
    const queryValues = {}

    try {
        if (!findThisProduct || !typeOfValues.includes(findThisProduct)) {
            return "Invalid product field"
        }else{
            queryValues[findThisProduct] = type[findThisProduct]
            return await Product.findOne(queryValues)
        }
        

    } catch (error) {
        return error.message
    }

}

module.exports = {
    findProductByAny
}