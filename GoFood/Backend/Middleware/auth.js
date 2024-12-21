const jwt = require('jsonwebtoken')

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY

async function auth(req , res , next) {
    const token = req.cookies.token || req.body.token || req.header('Authorization')?.replace("Bearer " , "")
    if (!token) return res.status(403).send('Access denied');

    try {
        const payload = jwt.verify(token , SECRET_KEY)
        req.user = payload;
        next()
    }
    catch(error) {
        console.log("User is not authorized")
        console.error(error)
        return res.status(401).json({
            success:false,
            message:"User is not authorized"
        })
    }
}

module.exports = auth
