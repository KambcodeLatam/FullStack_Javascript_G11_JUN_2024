import express from 'express';
import 'dotenv/config'
import { getBooks, getBooksById, getBooksByName, getTest } from './funciones/getFunctions.js';
import { createBooks } from './funciones/postFunctions.js';
import { updateBook } from './funciones/putFunctions.js';
import { deleteBook } from './funciones/deleteFunctions.js';
import { auditoria, authEndpoints, validateBodyBooks } from './middlewares/index.js';
 
const app = express()

app.use(express.json())

app.use(auditoria)

const port = process.env.PORT 

app.get('/', getTest)

app.get('/libros', getBooks)

app.get('/libros/:id', authEndpoints, getBooksById)

app.get('/libros/name/:name', getBooksByName)

app.post('/libros', validateBodyBooks, createBooks )

app.put('/libros/:id', validateBodyBooks, updateBook)

app.delete('/libros/:id', authEndpoints, deleteBook)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})