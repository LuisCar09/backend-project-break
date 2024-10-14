const Product = require('../../models/Product')
const findProductByAny = async (type) => {
    const findThisProduct = Object.keys(type)[0].toLowerCase()
    const typeOfValues = ["_id", "name", "description", "image", "category", "size", "price"]
    const queryValues = {}

    try {

        if (typeOfValues.includes(findThisProduct)) {
            queryValues[findThisProduct] = type[findThisProduct]

        }

        return await Product.findOne(queryValues)

    } catch (error) {
        return error.message
    }

}

module.exports = {
    findProductByAny
}