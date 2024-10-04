const renderProducts = (products) => {
    
    const html = products.map(product => {
        return `
        <div class="product">
                <h2>${product.name}</h2>
                <div>
                    <img src="${product.image}" alt="{product.name}">
                </div>
                <a href="/product/:${product._id}">
                    <button>Ver</button>
                </a>
        </div>
        `
    }).join('')

    return html


}
const navbar = () =>  {
    const categories =  ["Camisetas", "Pantalones", "Zapatos", "Accesorios",];
    const listItems = categories.map(cat => {
        return `<li><a href='/?category=${cat}'>${cat}</a></li>`
    }).join('')

    const html = 
    `
    <navbar>
            <div>
                <a href="/">Productos</a>
            </div>
            <ul>
               ${listItems} 
            </ul>
            <div>
                <a href="/login">Login</a>
            </div>
    </navbar>
    `
    return html
}


module.exports = {
    renderProducts,
    navbar

}