const request = require('supertest')
const app = require('../app')
const {testLoginFunction} = require('../public/utils/index.js')

describe('GET /: endpont', () => {
    it('should return a list of items', async () => {
        const data = await request(app).get('/').expect(200)

        expect(data.text).toBeDefined()
    })
    it('should return a product', async () => {

        const productId = "6700626aa416e42ce2f77ce0"

        const data = await request(app).get(`/product/${productId}`).expect(200)
        expect(data.text).toBeDefined();
        expect(data.text.length).toBeGreaterThan(0)
    })
    it('should return a product filtered by category', async () => {

        const queryParameters = {
            category: "T-Shirts"
        }

        const data = await request(app).get(`/`).query(queryParameters).expect(200)

        expect(data.text).toBeDefined();
        expect(data.text.length).toBeGreaterThan(0)
    })
})

describe('GET /register endpoint ', () => {
    it('should return a form', async () => {
        const data = await request(app).get('/register').expect(200)
        const html = 
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/login.css">
    <title>Register</title>
</head>
<body>
    <header id="header-top" class='header-top'>
        <nav>
        
            <div>
                <a href="/">Products</a>
            </div>
            <ul>
                <li><a href='/dashboard/?category=Camisetas ' > T-Shirts</a></li>
                <li><a href='/dashboard/?category=Pantalones ' > Pants</a></li>
                <li><a href='/dashboard/?category=Zapatos ' > Shoes</a></li>
                <li><a href='/dashboard/?category=Accesorios ' > Accessories</a></li>
            </ul>
            <div>
                <a href="/login">Log in</a>
            </div>
        
        </nav>
    </header>
    
    <main class='main-container'>
        <div class="contact-container">
            <h1>Registrarse</h1>
            <h3>Have an account? <a href="/login">Log in now</a> </h3>
            <div class="providerAuth">
                <div id="google" class="providers-logo">
                    <img src="../images/2993685_brand_brands_google_logo_logos_icon.png"></img>
                </div>
                <div id="github" class="providers-logo">
                    <img src="../images/211904_social_github_icon.png"></img>
                </div>
                <div id="facebook" class="providers-logo">
                    <img src="../images/9693535_facebook_katana_social media_social_communication_icon.png"></img>
                </div>
            </div>
            <form action="/register" method="post" id="login-form"  class="login-form">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="email" autocomplete='true'>
        
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="**********" required autocomplete='true'>
        
                <button type="submit">Register</button>
               
                <button type="button">Back</button>
        
            </form>
            <div id="message"></div>
        </div>
    </main>
    <script type="module" src="../utils/register.js"></script>
</body>
</html>
        `
        expect(data.text).toBeDefined();
        expect(data.text.length).toBeGreaterThan(0)
        expect(data.text).toMatch(/<form/);  // Verifica si contiene la etiqueta <form>
        expect(data.text).toMatch(/<input/); // Verifica si contiene algún <input>
        expect(data.text).toMatch(/<button/); // Verifica si contiene un botón
        expect(data.text.trim()).toEqual(html.trim())
        
    })
})
describe('POST /register endPoint',()=>{
    it('should create user and return a redirect',async() => {
        const body= {
            email : 'nuevoEmail@gmail.com',
            password : '12345678'
        }
        const data = await request(app).post('/register').send(body).expect(302)
        
        
    })
})


describe('GET /login endpoint ', () => {
    it('should return a form', async () => {
        const data = await request(app).get('/login').expect(200)
        const html = 
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/login.css">
    <title>Register</title>
</head>
<body>
    
    <header id="header-top" class='header-top'>
        <nav>
        
            <div>
                <a href="/">Products</a>
            </div>
            <ul>
                
                <li><a href='/dashboard/?category=Camisetas ' > T-Shirts</a></li>
                <li><a href='/dashboard/?category=Pantalones ' > Pants</a></li>
                <li><a href='/dashboard/?category=Zapatos ' > Shoes</a></li>
                <li><a href='/dashboard/?category=Accesorios ' > Accessories</a></li>

            </ul>
            <div>
                <a href="/login">Log in</a>
            </div>
        
        </nav>
    </header>
    
    <main class='main-container'>
        <div class="contact-container">
            <h1>Log in to your account</h1>
            <h3>Don't have an account? <a href="/register">Sign Up</a> </h3>
            <div class="providerAuth">
                <div id="google" class="providers-logo">
                    <img src="../images/2993685_brand_brands_google_logo_logos_icon.png"></img>
                </div>
                <div id="github" class="providers-logo">
                    <img src="../images/211904_social_github_icon.png"></img>
                </div>
                <div id="facebook" class="providers-logo">
                    <img src="../images/9693535_facebook_katana_social media_social_communication_icon.png"></img>
                </div>
            </div>
            <form action="/register" method="post" id="login-form"  class="login-form">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="email" autocomplete='true'>
        
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="**********" required autocomplete='true'>
        
                
                <button id="login" class="login" type="button">Login</button>
                <button id="back" type="button">Back</button>
        
            </form>
            <div id="message"></div>
        </div>
    </main>
    <script type="module" src="./utils/login.js"></script>
</body>
</html>
        `
        expect(data.text).toBeDefined();
        expect(data.text.length).toBeGreaterThan(0)
        expect(data.text).toMatch(/<form/);  // Verifica si contiene la etiqueta <form>
        expect(data.text).toMatch(/<input/); // Verifica si contiene algún <input>
        expect(data.text).toMatch(/<button/); // Verifica si contiene un botón
        expect(data.text.trim()).toEqual(html.trim())
        
    })
})


describe('POST /logout',()=>{
    it('Should redirect and logout',async()=>{
        const data = await request(app).post('/logout').expect(200)
    })
})