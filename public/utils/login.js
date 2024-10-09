// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

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
const provider = new GoogleAuthProvider()
const button = document.getElementById('login')
const googleDiv = document.getElementById('google')
 const messageContainer = document.getElementById('message')
const loginButton = async() => {
   
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
        
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({idToken})
        })
        
        
        const data = await response.json()
        if (data.success) {
            window.location.href = '/dashboard'
        }
        
    } catch (error) {
        console.log(error.message)
        messageContainer.textContent = 'User not authorized'
    }

}
const loginWithGoogle = async() => {
    
    
    try {
        const userCredential = await signInWithPopup(auth,provider)    
        const idToken = await userCredential.user.getIdToken()
        console.log(idToken)

        const response = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({idToken})
        })
        const data = await response.json()
        console.log(data);
        
        if (data.success) {
            window.location.href = '/dashboard'
        }

    } catch (error) {
        console.error('There was an error login user.')
        messageContainer.textContent = 'User not authorized'
    }
}



button.addEventListener('click', loginButton)
googleDiv.addEventListener('click',loginWithGoogle)