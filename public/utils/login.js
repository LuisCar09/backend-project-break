// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, GithubAuthProvider,FacebookAuthProvider } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

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
const providerGoogle = new GoogleAuthProvider()
const providerGitHub = new GithubAuthProvider()
const providerFacebook = new FacebookAuthProvider()
const button = document.getElementById('login')
const googleDiv = document.getElementById('google')
const gitHubDiv = document.getElementById('github')
const facebookDiv = document.getElementById('facebook')
const messageContainer = document.getElementById('message')

const loginButton = async() => {
   
    messageContainer.textContent = ''
    try {

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        if (!email || !password) {
            messageContainer.textContent = 'must cointain email and password'
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
const logInWithGoogle = async() => {
    
    
    try {
        const userCredential = await signInWithPopup(auth,providerGoogle)    
        const idToken = await userCredential.user.getIdToken()
        

        const response = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({idToken})
        })
        const data = await response.json()
        
        
        if (data.success) {
            window.location.href = '/dashboard'
        }

    } catch (error) {
        console.error('There was an error login user.')
        messageContainer.textContent = 'User not authorized'
    }
}
const logInWithGithub =async () => {
    
    try {
        const userCredential = await signInWithPopup(auth,providerGitHub)
        const idToken = await userCredential.user.getIdToken()
        const response = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({idToken})
        })
        
        const data = await response.json()

        if (data.success) {
            window.location.href = './dashboard'
        }
        
    } catch (error) {
        console.log(error.message);
        console.error('There was an error loginGitHub user.')
        messageContainer.textContent = error.message
    }
    
}
const logInWithFacebook =async () => {
    
    try {
        const userCredential = await signInWithPopup(auth,providerFacebook)
        const idToken = await userCredential.user.getIdToken()
        
    
        const response = await fetch('/login',{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
               
            },
            body: JSON.stringify({idToken})
        })
        const data = await response.json()
        
        data.success ? window.location.href = '/dashboard' : null
        
    } catch (error) {
        console.log("There was an error login user.")
        messageContainer.textContent = 'User not authorized'
    }
}

button.addEventListener('click', loginButton)
googleDiv.addEventListener('click',logInWithGoogle)
gitHubDiv.addEventListener('click',logInWithGithub)
facebookDiv.addEventListener('click',logInWithFacebook)