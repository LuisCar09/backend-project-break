const {renderProducts,navbar,itemCart,showProducts,comesFromDashboard,form,} = require('../public/utils/index')
const products = [{
    "_id": "6700626aa416e42ce2f77ce0",
    "name": "Nike T-Shirt",
    "description": "Soft t-shirt made by an important designer",
    "image": "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg",
    "category": "T-Shirts",
    "size": "XL",
    "price": 1000,
    "stock": 5,
    "createdAt": "2024-10-04T21:47:22.264Z",
    "updatedAt": "2024-10-14T14:36:42.109Z",
    "__v": 0
  },
  {
    "_id": "670065f8a416e42ce2f77ce3",
    "name": "Pants for Men",
    "description": "A modern jean that gives you room to move, but is tight but not too tight. (If you want the look but not the feel, this is the way to go.) With a slim fit that tapers through the seat and thigh, the This product is an original Levi's 511 Slim jean is optimally designed to look good with everything",
    "image": "https://m.media-amazon.com/images/I/61bc5if-aYL._AC_SY741_.jpg",
    "category": "Pants",
    "size": "L",
    "price": 20,
    "stock": 20,
    "createdAt": "2024-10-04T22:02:32.767Z",
    "updatedAt": "2024-10-14T22:36:40.520Z",
    "__v": 0
  },
  {
    "_id": "67006977112e5ebf5b2da1e1",
    "name": "Frodo's ring",
    "description": "A golden ring with mysterious engravings, symbolizing immense power and the key to an epic journey in a mystical realm...",
    "image": "https://cdn.pixabay.com/photo/2016/09/15/07/05/ring-1671094_1280.jpg",
    "category": "Accessories",
    "size": "S",
    "price": 500000,
    "stock": 1,
    "createdAt": "2024-10-04T22:17:27.290Z",
    "updatedAt": "2024-10-11T20:00:12.055Z",
    "__v": 0
  },
  {
    "_id": "6709964a205023f5a6e10932",
    "name": "Camiseta Adicolor",
    "description": "The classics inspire, but this adidas t-shirt encourages reinvention.",
    "image": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5005cca9ee1f40108ee1d98f832ccd19_9366/Camiseta_Adicolor_Outline_Trefoil_Verde_IR7993_01_laydown.jpg",
    "category": "T-Shirts",
    "size": "L",
    "price": 25,
    "stock": 0,
    "createdAt": "2024-10-11T21:19:06.912Z",
    "updatedAt": "2024-10-12T15:41:28.910Z",
    "__v": 0
},]

describe('navbar rendering function',()=>{
    it('should return a navbar populated with dashboard',()=>{
        const navbarRendered = navbar(false)

        expect(navbar(true)).not.toEqual(navbarRendered)
        expect(navbar(false)).toEqual(navbarRendered)
        expect(navbar(true)).toContain('<li')
        expect(navbar(true)).toMatch(/<a/)
        expect(navbar(true)).toContain("<a href='/dashboard/?category=T-Shirts")
        expect(navbar(true)).toContain("<a href='/dashboard/?category=Pants")
        expect(navbar(true)).toContain("<a href='/dashboard/?category=Shoes")
        expect(navbar(true)).toContain("<a href='/dashboard/?category=Accessories")

    })
    it('should return a navbar populated without dashboard',()=>{
        const navbarRendered = navbar(true)

        expect(navbar(false)).not.toEqual(navbarRendered)
        expect(navbar(true)).toEqual(navbarRendered)
        expect(navbar(false)).toContain('<li')
        expect(navbar(false)).toMatch(/<a/)
        expect(navbar(false)).toContain("<a href='/?category=T-Shirts")
        expect(navbar(false)).toContain("<a href='/?category=Pants")
        expect(navbar(false)).toContain("<a href='/?category=Shoes")
        expect(navbar(false)).toContain("<a href='/?category=Accessories")

    })
})


describe('itemCart rendering function',()=>{
    it('should return a cart populated',async()=>{
        
        const divItemCar = itemCart(products,false)
        
        expect(divItemCar).toBeDefined()
        expect(divItemCar).not.toEqual(itemCart(products,true))
        expect(divItemCar).toMatch(/<img/)
        expect(divItemCar).toMatch(/<h2/)
        expect(divItemCar).toMatch(/<span/)
        expect(divItemCar).toMatch(/<p/)
           
    })
})



describe('showProduct rendering function',()=>{
    it('should return a all products',() => {
    
    const divItemCar = itemCart(products,false)
    const navbarDiv = navbar(false)
    const showProductDiv = showProducts(navbarDiv,divItemCar)

    expect(showProductDiv).toBeDefined()
    expect(showProductDiv).toMatch(/<img/)
    expect(showProductDiv).toMatch(/<h2/)
    expect(showProductDiv).toMatch(/<span/)
    expect(showProductDiv).toMatch(/<p/)
    })
})


describe('comesFromDashboard should return true or false',()=>{
    it('should return true',() => {
    
    const path = "/dashboard"
    const findPath = 'dashboard'
    const comesFromDashboardFunction = comesFromDashboard(path,findPath)
    
    expect(comesFromDashboardFunction).toBe(true)
    
    })
    it('should return false',() => {
    
        const path = "/notFound"
        const findPath = 'dashboard'
        const comesFromDashboardFunction = comesFromDashboard(path,findPath)
        
    expect(comesFromDashboardFunction).not.toBe(true)
        
    })
})


describe('Form function',()=>{
    it('should return a form',() => {
    const product = {
        "_id": "6700626aa416e42ce2f77ce0",
        "name": "Nike T-Shirt",
        "description": "Soft t-shirt made by an important designer",
        "image": "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg",
        "category": "T-Shirts",
        "size": "XL",
        "price": 1000,
        "stock": 5,
        "createdAt": "2024-10-04T21:47:22.264Z",
        "updatedAt": "2024-10-14T14:36:42.109Z",
        "__v": 0
      }
    const formFunction = form('POST',product)
    expect(formFunction).toBeDefined()
    expect(formFunction).toMatch(/<form/)
    expect(formFunction).toMatch(/<label/)
    expect(formFunction).toMatch(/<textarea/)
    expect(formFunction).toMatch(/<select/)
    expect(formFunction).toMatch(/<option/)
    })
    
})

//renderProducts = (products,isFromDashboard)

describe('Form function',()=>{
    it('should return a form',() => {
    
    const renderFunction = renderProducts(products,false)
    console.log(renderFunction);
    
    expect(renderFunction).toBeDefined()
    expect(renderFunction).toMatch(/<h2/)
    expect(renderFunction).toMatch(/<div/)
    expect(renderFunction).toMatch(/<img/)
    expect(renderFunction).toMatch(/<a/)
    expect(renderFunction).toMatch(/<button/)
    })
    
})