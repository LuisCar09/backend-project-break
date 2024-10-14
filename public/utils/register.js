
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth,signInWithPopup, GoogleAuthProvider, GithubAuthProvider,FacebookAuthProvider,fetchSignInMethodsForEmail } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';


const firebaseConfig = {
    apiKey: "AIzaSyCD0EZepPrAb7F0rvWBrLXBv--kfIi9EEs",
    authDomain: "web-store-project01.firebaseapp.com",
    projectId: "web-store-project01",
    storageBucket: "web-store-project01.appspot.com",
    messagingSenderId: "785062203003",
    appId: "1:785062203003:web:e61383492ab595f2569cde"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const providerGitHub = new GithubAuthProvider(); 
const providerFacebook = new FacebookAuthProvider();
const googleDiv = document.getElementById('google')
const gitHubDiv = document.getElementById('github')
const facebookDiv = document.getElementById('facebook')
const messageContainer = document.getElementById('message')

const registerWithGoogle = async() => {
    
    try {
        const userCredential = await signInWithPopup(auth,googleProvider)
        const idToken = await userCredential.user.getIdToken()
        
        const response = await fetch('/login',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({idToken})
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

const logInWithGithub = async () => {
    
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
        
        
        
        // console.log(error);
        
        // if (error.code === 'auth/account-exists-with-different-credential') {
            
        //     console.log(error.customData);
        //     const email = error.customData.email;
        //     const userCredential = error.customData._tokenResponse.federatedId
        //     console.log(email);
        //     console.log(userCredential);
 
        //     const credential = GithubAuthProvider.credentialFromError(error)
        //     console.log(`Credenciales : ${credential}`);
            
        //     const signInMethods = await fetchSignInMethodsForEmail(auth,userCredential)
        //     console.log(`Metodos de inicio de sesion para correo ${email} : ${signInMethods.length}`);
            
            
        // }
        
        messageContainer.textContent = error.message
        
        
    }
    
}

const logInWithFacebook = async () => {
    
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

googleDiv.addEventListener('click',registerWithGoogle)
gitHubDiv.addEventListener('click',logInWithGithub)
facebookDiv.addEventListener('click',logInWithFacebook)