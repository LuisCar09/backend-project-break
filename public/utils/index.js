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
    <a href="/dashboard/${_id}/edit"><button type="button">Editar</button></a>
    <a href="/dashboard/${_id}/delete"><button type="button">Borrar</button></a>
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

const comesFromDashboard = (path,findPath)=>{
    const isFromDashboard = path.split('/').find(e => e === findPath)
    return isFromDashboard ? true : false
}
const form = (method,editProps)=> {
    const isPost = method === 'POST' ? true : false
    const existProps = editProps ? true : false
    html = `
    <form action="${isPost ? '/dashboard/new' : '/dashboard/:productId'}" method="${!method ? 'PUT':'POST'}">
        <label for="name">Nombre:</label>
        <input id="name" name ='name' placeholder="Nombre del producto" type="text" required value='${existProps ? editProps.name : ''}'>

        <label for="description">Descripción:</label>
        <textarea name="description" id="description" placeholder="Descripcion del producto" required ' >${existProps ? editProps.description : ''}</textarea>

        <label for="price">Precio:</label>
        <input id="price" name ='price' placeholder="10" type="number" required value='${existProps ? editProps.price : ''}'>
        
        <label for="image">Imagen:</label>
        <input type="text" id="imagen" name="image" value='${existProps ? editProps.image : ''}'>
        

        <label for="category">Categoría:</label>
        <select name="category" id="category" required >
            <optgroup label="Categories">
                <option value="">Selecciona una categoría</option>
                <option value="Camisetas">Camisetas</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Zapatos">Zapatos</option>
                <option value="Accesorios">Accesorios</option>
            </optgroup>
        </select>
        
        <label for="size">Talla:</label>
        <select name="size" id="size" required >
            <optgroup label="Sizes">
                <option value="">Selecciona una talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="32">32</option>
                <option value="34">34</option>
                <option value="36">36</option>
                <option value="38">38</option>
                <option value="40">40</option>
                <option value="42">42</option>
            </optgroup>
        </select>
        

        

        ${isPost ? '<button type="submit">Crear</button>' : '<button type="submit">Guardar</button> <a href="/dasboard"> <button>Cerrar</button> </a>' }

    </form>
    `
    return html
    
}

module.exports = {
    renderProducts,
    navbar,
    itemCart,
    showProducts,
    comesFromDashboard,
    form

}