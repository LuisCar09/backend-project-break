const renderProducts = (products,isFromDashboard) => {
    
    const html = products.map(product => {
        return `
        <div class="product">
                <h2>${product.name}</h2>
                <div>
                    <img src="${product.image}" alt="{product.name}">
                </div>

                <a href="${!isFromDashboard ? `/product/${product._id}` : `/dashboard/${product._id}`}">
                    <button>Ver</button>
                </a>
        </div>
        `
    }).join('')

    return html

}
const showButtons = (dashboard,_id) => {
    if(!dashboard){
        return ''
    }
    return `
    <a href="/dashboard/:${_id}/edit"><button type="button">Editar</button></a>
    <a href="/dashboard/:${_id}/delete"><button type="button">Borrar</button></a>
`
}

const itemCart = (products,dashboard) => {
    
    
    const html = products.map(product => {
        return `
        <div class="product">
                <h2>${product.name}</h2>
                <div>
                    <img src="${product.image}" alt="{product.name}">
                </div>

                <p>
                Descripcion:${product.description}
                </p>
                <p>
                Precio:${product.description}
                </p>
                <p>
                Categoria:${product.category}
                </p>
                <p>
                Talla:${product.size}
                </p>

                
            ${showButtons(dashboard,product._id)}    
                
        </div>
        `
    }).join('')

    return html
}

const navbar = (isFromDashboard) =>  {
    const categories =  ["Camisetas", "Pantalones", "Zapatos", "Accesorios"];
    
    const listItems = categories.map(cat => {
        
        return `<li><a href='${!isFromDashboard ? `/?category=${cat}`: `/dashboard/?category=${cat} ` }' > ${cat}</a></li>`
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
const showProducts = (navbar, products) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/styles/styles.css">
                <title>Web Store</title>
            </head>
            <body>
                <main id="main-container" class='main-container'>
                    <header id="header-top" class='header-top'>
                        ${navbar}
                        
                    </header>
                    <article id="products-container" class='products-container' >
                       ${products}
                    </article>
                </main>
                <script src="../utils/index.js"></script>
            </body>
            </html>
            `
}

const comesFromDashboard = (path)=>{
    return path === 'dashboard' ? true : false
}


module.exports = {
    renderProducts,
    navbar,
    itemCart,
    showProducts,
    comesFromDashboard

}