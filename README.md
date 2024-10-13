
# Tienda Online

La **Tienda Online** es una plataforma web que ofrece una amplia gama de productos relacionados con la moda y el estilo, como camisetas, zapatos y t-shirts, entre otros. Está dirigida a usuarios interesados en la ropa y la moda, brindándoles la comodidad de realizar compras desde su hogar, sin necesidad de desplazarse.

## Instalación

1. Haz un fork del repositorio desde GitHub:
   ```bash
   https://github.com/LuisCar09/backend-project-break
   ```

2. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/TU_USUARIO/backend-project-break.git
   ```

3. Navega al directorio del proyecto:
   ```bash
   cd backend-project-break
   ```

4. Instala las dependencias necesarias:
   ```bash
   npm install cors dotenv express firebase firebase-admin mongoose cookie-parser cors
   ```

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

```bash
PORT=your_port_number
MONGO_URI=your_mongo_database_uri

# Firebase variables
FIREBASE_TYPE=your_firebase_type
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=your_auth_uri
FIREBASE_TOKEN_URI=your_token_uri
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=your_auth_provider_cert_url
FIREBASE_CLIENT_X509_CERT_URL=your_client_cert_url
FIREBASE_UNIVERSE_DOMAIN=your_universe_domain
```

## Poner en marcha la aplicación

Para iniciar la aplicación en tu entorno local, ejecuta el siguiente comando:

```bash
npm start
```



## Bonus 1 - Tests

Para poder comprobar que el controlador de productos funciona correctamente, vamos a crear tests para las funciones. Para ello, necesitaremos instalar el paquete `jest` y crear el archivo `productController.test.js` en la carpeta `test`. En este archivo, importaremos el controlador y crearemos los tests. Podemos hacer tests tanto para las funciones que devuelven html como para las funciones que crean, actualizan o eliminan productos.

## Bonus 2 - API y documentación con Swagger

Para poder usar la aplicación con un frontend en React, vamos a crear una API que haga las mismas operaciones que el controlador de productos, pero que devuelva los datos en formato JSON. Documentaremos la API con Swagger, para que sea más fácil de entender y usar.




