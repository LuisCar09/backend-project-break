

const renderProducts = (products,isFromDashboard) => {
    
    const html = products.map(product => {
        return `
        <div class="product">
                <h2>${product.name}</h2>
                <div>
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <a href="${!isFromDashboard ? `/product/${product._id}` : `/dashboard/${product._id}`}">
                    <button>View</button>
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
    <a href="/dashboard/${_id}/edit"><button type="button">Edit</button></a>
    <button type="button" onClick="deleteFunction('${_id}')" class="secundary-button" >Delete</button>
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
                <span>Descripcion:</span> ${product.description}
                </p>
                <p>
               <span> Precio:</span> ${product.price}
                </p>
                <p>
                <span>Categoria:</span> ${product.category}
                </p>
                <p>
                <span>Talla:</span> ${product.size}
                </p>

                
            ${showButtons(dashboard,product._id)}    
                
        </div>
        `
    }).join('')

    return html
}

const navbar = (isFromDashboard) =>  {
    const categories =  ["T-Shirts", "Pants", "Shoes", "Accessories"];
    
    const listItems = categories.map(cat => {
        
        return `<li><a href='${!isFromDashboard ? `/?category=${cat}`: `/dashboard/?category=${cat} ` }' > ${cat}</a></li>`
    }).join('')

    const showLoginOrLogout = !isFromDashboard ? '<a href="/login">Log in</a>' : '<a onClick="checkOut()">Log out</a>'
    const showNewProduct = !isFromDashboard ? '' : '<a href="dashboard/new">New Product</a>'
    
    const html = 
    `
    <nav>
            <div>
                <a href="${!isFromDashboard ? '/' : '/dashboard' } ">Products</a>
            </div>
            <ul>
               ${listItems} 
            </ul>
            <div>
               ${showNewProduct}
            </div>
            <div>
               ${showLoginOrLogout}
            </div>
    </nav>
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
                    <header id="header-top" class='header-top'>
                        ${navbar}
                        
                    </header>
                <main id="main-container" class='main-container'>
                    
                    <article id="products-container" class='products-container' >
                       ${products}
                    </article>
                </main>
                <script src="/utils/index.js"></script>
            </body>
            
            </html>
            `
}

const comesFromDashboard = (path,findPath)=>{
    const isFromDashboard = path.split('/').find(e => e === findPath)
    return isFromDashboard ? true : false
}

const renderOptions = (existProps,arrValues, productType) => {
    return existProps ? arrValues.map(value => {
    return value.toLowerCase() !== productType.toLowerCase() ? `<option value="${value}">${value}</option>` : `<option value="${value}" selected>${value}</option>`
    }).join('') 
    : arrValues.map(value => {
    return `<option value="${value}">${value}</option>` 
    }).join('')
}
const form = (method,editProps)=> {
    const isPost = method === 'POST' ? true : false
    const existProps = editProps ? true : false
    const sizeValues = ["S", "M", "L", "XL", "XXL", "32", "34", "36", "38", "40", "42"];
    const categoryValues = ["T-Shirts", "Pants", "Shoes", "Accessories"]; 
    const sizeOptions = !existProps ? renderOptions(existProps,sizeValues) :renderOptions(existProps,sizeValues,editProps.size )
    const categoryOptions =  !existProps ? renderOptions(existProps,categoryValues) : renderOptions(existProps,categoryValues,editProps.category)
    
    html = `
    <div class="contact-container" >
        <form action="${isPost ? '/dashboard/new' : ''}" method="${!isPost ? 'PUT':'POST'}" class="login-form" >
            <label for="name">Name:</label>
            <input id="name" name ='name' placeholder="Product name" type="text" required value='${existProps ? editProps.name : ''}'>

            <label for="description">Description:</label>
            <textarea name="description" id="description" placeholder="Product description." required ' >${existProps ? editProps.description : ''}</textarea>

            <label for="price">Price:</label>
            <input id="price" name ='price' placeholder="10" type="number" required value='${existProps ? editProps.price : ''}'>
            
            <label for="image">Image:</label>
            <input type="text" id="image" name="image" value='${existProps ? editProps.image : ''}'>
            

            <label for="category">Category:</label>
            <select name="category" id="category" required value='${existProps ? editProps.category : ''}' >
                <optgroup label="Categories">
                    <option value="">Selecct a category.</option>
                    ${categoryOptions}
                </optgroup>
            </select>
            
            <label for="size">Size:</label>
            <select name="size" id="size" required required value='${existProps ? editProps.size : ''}' >

                <optgroup label="Sizes">
                
                    <option value="">Select a size.</option>
                    ${sizeOptions}
                </optgroup>
            </select>

            ${isPost ? 
            '<button type="submit">Crear</button>' 
            : `<button type="button" id="saveButton" onClick="putFunction('${editProps.id}')"> Guardar </button>   <a href="/dashboard"><button type="button" >Cerrar</button> </a>` }

        </form>
    </div>
    `
    return html
    
}
const putFunction = async (idProduct) => {
    const name = document.getElementById('name').value
    const description = document.getElementById('description').value
    const price = document.getElementById('price').value
    const image = document.getElementById('image').value
    const category = document.getElementById('category').value
    const size = document.getElementById('size').value
    
    
    
    try {
        const response = await fetch('/dashboard/:productId',{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                description,
                price,
                image,
                category,
                size,
                idProduct
            })
        })
        const data = await response.json()

        if (data.success) {
            window.location.href = '/dashboard'
             
             
        }
        
    } catch (error) {
        window.location.href = `/dashboard/${idProduct}/edit`
        console.log('There was a problem sending value to server',error.message)
    }
}
const deleteFunction = async (idProduct) => {
    
    
    try {
        const response = await fetch('/dashboard/:productId/delete',{
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                idProduct
            })
        })
        const data = await response.json()
        
        
        if (data.success) {
            window.location.href = '/dashboard'
              
        }
        
    } catch (error) {
        window.location.href = `/dashboard/${idProduct}/edit`
        console.log('There was a problem sending value to server',error.message)
    }
}

const checkOut = async() => {
    
    try {
        const response = await fetch ('/logout',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({"message":"DELETE"})
        })
        
        const data = await response.json()
        if (data.success) {
            window.location.href = '/dashboard'
        }
        
    } catch (error) {
        console.log(error.message)
    }
    
}

const testLoginFunction = () => {
    const body= {
        email : 'nuevoEmail@gmail.com',
        password : '12345678'
    }
    try {
        const userCredential = signInWithEmailAndPassword(auth,body.email,body.password)
        const idToken = userCredential.user.getIdToken
        return idToken
        
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = {
    renderProducts,
    navbar,
    itemCart,
    showProducts,
    comesFromDashboard,
    form,
    
}