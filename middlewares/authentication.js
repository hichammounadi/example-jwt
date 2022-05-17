const jwt = require('jsonwebtoken')



const auth = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    console.log(authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.send(`You are not authorized`)
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY)
        req.user = {
            userId: payload.userId,
            userEmail: payload.userEmail
        }
        next()
    } catch (error) {
        return res.status(401).send('Authentication invalid ', error)
    }
}


module.exports = auth