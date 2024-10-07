// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyCD0EZepPrAb7F0rvWBrLXBv--kfIi9EEs",
    authDomain: "web-store-project01.firebaseapp.com",
    projectId: "web-store-project01",
    storageBucket: "web-store-project01.appspot.com",
    messagingSenderId: "785062203003",
    appId: "1:785062203003:web:e61383492ab595f2569cde"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const button = document.getElementById('login')

const loginButton = async() => {
    const messageContainer = document.getElementById('message')
    messageContainer.textContent = ''
    try {

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        if (!email || !password) {
            messageContainer.textContent = 'APRENDE A ESCRIBIR IDIOTA'
            return;
        }
        //verificar si el usuario existe en la DB de firebase
        const userCredential = await signInWithEmailAndPassword(auth,email,password) 
        const idToken = await userCredential.user.getIdToken()
        
        const response = fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({idToken})
        })
        
        
        const data = await response
        if (data.status === 200) {
            window.location.href = '/dashboard'
        }
        
    } catch (error) {
        console.log(error.message)
        messageContainer.textContent = 'User not authorized'
    }

}


button.addEventListener('click', loginButton)