const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = function (req, res, next) {
    const token = req.header('Authorization')
    // const gettok = localStorage.getItem('token')
    // console.log(gettok);
    console.log(`this is the token from header ${token}`);
    if (!token) return res.status(401).json({ message: 'Access denied, no token provided' })
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(`this is decoded ${JSON.stringify(decoded)}`);
        req.user = decoded
        next()
    }
    catch(err){
        res.status(400).json({message: 'Invalid token'})
    }
 }