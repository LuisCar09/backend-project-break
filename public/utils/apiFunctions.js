const Product = require('../../models/Product')
const findProductByAny = async (fieldType) => {
    const findThisProduct = Object.keys(fieldType)[0]?.toLowerCase()
    const queryValues = {}
    const existThisField = Boolean(await Product.schema.path(findThisProduct))
    
    try {
        if (!findThisProduct || !existThisField) {
            return "Invalid product field"
        }
        if (existThisField) {
            queryValues[findThisProduct] = fieldType[findThisProduct]
            return await Product.findOne(queryValues)
        }

    } catch (error) {
        return error.message
    }

}

module.exports = {
    findProductByAny
}