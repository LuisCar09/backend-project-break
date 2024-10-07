const admin = require('firebase-admin')
const auth = admin.auth()

const verifyToken = (req,res,next) => {
    const idToken = req.cookies.token
    
    
        if (!idToken) {
            return res.redirect('/login')
        }
        auth.verifyIdToken(idToken)
        .then(decodedToken=>{
            req.user = decodedToken
            next()
        })
        .catch(err => err.message)
    
}

module.exports = verifyToken