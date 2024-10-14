I=your_mongo_database_uri

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

## Tecnologías utilizadas

- **Lenguajes**: JavaScript, HTML, CSS
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB
- **Servicios en la nube**: Firebase

## Documentación de la API (endpoints)

### Endpoints desde el Admin:

- **`GET /`**: Devuelve todos los productos.
- **`GET /dashboard/new`**: Devuelve el formulario para subir un artículo nuevo.
- **`POST /dashboard/new`**: Crea un nuevo producto.
- **`GET /dashboard/:productId`**: Devuelve el detalle de un producto específico.
- **`PUT /dashboard/:productId`**: Actualiza un producto.
- **`GET /dashboard/:productId/edit`**: Devuelve el formulario para editar un producto.
- **`DELETE /dashboard/:productId/delete`**: Elimina un producto.
- **`GET /register`**: Devuelve el formulario de registro.
- **`POST /register`**: Registra un nuevo usuario.
- **`GET /login`**: Devuelve el formulario de inicio de sesión.
- **`POST /login`**: Inicia sesión un usuario.

### Endpoints desde la parte de Usuario:

- **`GET /`**: Devuelve todos los productos.
- **`GET /product/:productId`**: Devuelve el detalle de un producto específico.

## Tests

El proyecto utilizará **JEST** como marco de pruebas. Aunque aún no se han implementado los tests, se recomienda seguir estos pasos para prepararlos en el futuro:

1. **Instalación de JEST**:
   ```bash
   npm install --save-dev jest
   ```

2. **Estructura de los tests**:
   - Crea una carpeta llamada `tests` en la raíz del proyecto para organizar tus archivos de prueba.
   - Asegúrate de seguir las convenciones de JEST para nombrar tus archivos de prueba, por ejemplo, `*.test.js`.

3. **Ejecutar los tests**:
   ```bash
   npm test
   ```

## Despliegue

- **Base de datos**: La base de datos está desplegada en **MongoDB Atlas**.
- **Aplicación**: La aplicación está desplegada en **Render**.
  - **URL de la aplicación**: [https://backend-project-break-c2xv.onrender.com](https://backend-project-break-c2xv.onrender.com)

### Instrucciones de despliegue en Render:
1. **Comando de build**:
   ```bash
   npm install
   ```

2. **Comando de arranque**:
   ```bash
   npm start
   ```

3. **Variables de entorno**: Asegúrate de subir todas las variables de entorno necesarias antes de desplegar la aplicación.

4. **Desplegar**: Sigue los pasos proporcionados por Render para finalizar el despliegue.

## Contribuciones

Para contribuir al proyecto **Tienda Online**, se solicita que los colaboradores verifiquen que no haya conflictos antes de realizar un **pull request**.

## Autores

- **Luis Carlos Bravo**

## Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que:

- Se permite a cualquier persona usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software.
- Se proporciona el software "tal cual", sin garantía de ningún tipo, expresa o implícita.


## Bonus 1 - Tests

Para poder comprobar que el controlador de productos funciona correctamente, vamos a crear tests para las funciones. Para ello, necesitaremos instalar el paquete `jest` y crear el archivo `productController.test.js` en la carpeta `test`. En este archivo, importaremos el controlador y crearemos los tests. Podemos hacer tests tanto para las funciones que devuelven html como para las funciones que crean, actualizan o eliminan productos.





