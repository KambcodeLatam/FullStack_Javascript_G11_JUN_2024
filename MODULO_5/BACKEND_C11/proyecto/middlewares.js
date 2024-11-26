import jwt from 'jsonwebtoken';
const secretKey = process.env.SECRET_KEY
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.status(401).json({message: 'Token not found'})
    jwt.verify(token, secretKey, (err, user) => {
        if(err) return res.status(403).json({message: 'Invalid token', err})
        req.user = user
        next()
    })
}