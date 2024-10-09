import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth,signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';
const googleProvider = document.getElementById('google')

const firebaseConfig = {
    apiKey: "AIzaSyCD0EZepPrAb7F0rvWBrLXBv--kfIi9EEs",
    authDomain: "web-store-project01.firebaseapp.com",
    projectId: "web-store-project01",
    storageBucket: "web-store-project01.appspot.com",
    messagingSenderId: "785062203003",
    appId: "1:785062203003:web:e61383492ab595f2569cde"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const registerWithGoogle = async() => {
    
    try {
        const userCredential = await signInWithPopup(auth,provider)
        const idToken = await userCredential.user.getIdToken()
        
        const response = await fetch('/login',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(idToken)
        })
        
        const data = await response.json()
        if (data.success) {
            window.location.href = "/dashboard"
        }

    } catch (error) {
        console.log(`User not authorized`);
        console.log(error.message);
        window.location.href = "/register"
    }
    
}


googleProvider.addEventListener('click',registerWithGoogle)