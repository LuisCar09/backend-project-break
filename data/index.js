const basicInfo = require('./basicInfo')
const components = require('./components')
const products = require('./apiProducts')

module.exports = {
    ...basicInfo,
    ...components,
    ...products
}