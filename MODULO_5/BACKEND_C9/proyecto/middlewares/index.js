import fs from 'fs'
import 'dotenv/config'
export const auditoria = (req, res, next) => {
    const { method, url } = req
    const log = `Metodo ${method} - URL: ${url} - Fecha: ${new Date()} body: ${JSON.stringify(req.body)}`
    fs.appendFileSync('logs.txt', log + '\n')
    next()
}

export const validateBodyBooks = (req, res, next) =>{
    const { title, author, year} = req.body
    if(!title || !author || !year) return res.status(400).json({ "message": "El body no esta completo, recuerda que necesitas el title, year y author" })
    next()
}

export const authEndpoints = (req,res,next)=> {
    const { authorization } = req.headers
    const token = process.env.AUTH_TOKEN 
    if(authorization !== token) return res.status(401).json({ "message": "No tienes autorizacion para acceder a este recurso"})
    next()
}