import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express()

app.use(express.json())

const books = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988, id: "1e8fec55-76bc-42f5-abec-22284e959650" },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923, id: "d7b712c6-c2ba-4848-920c-8672864a32df" },
  ];

  // CRUD - Create, Read, Update, Delete
  // GET - Read, POST - Create, PUT - Update, DELETE - Delete

const port = 3000

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.get('/libros', (req, res) => {
    if(books.length === 0) {
        res.status(404).json({ "message": "No hay libros" })
    }
    res.json(books)
})

app.get('/libros/:id', (req, res) => {
    const { id } = req.params
    const book = books.find((book) => book.id === id)
    if(!book) res.status(404).json({ "message": "Libro no encontrado" })
    res.json(book)
})

app.get('/libros/name/:name', (req, res) => {
    const { name } = req.params
    const resBooks = books.filter((book) => book.title.toLowerCase().includes(name.toLowerCase()))
    if(resBooks.length === 0) res.status(404).json({ "message": "Libro no encontrado" })
    else res.json(resBooks)
})


app.post('/libros', (req, res) => {
    const { title, author, year } = req.body
    const id = uuid()
    books.push({title, author, year, id})
    res.json({ "message": "Libro creado", "book": { title, author, year, id } })
})

app.put('/libros/:id', (req, res) => {
    const { id } = req.params
    const bookIndex = books.findIndex((book) => book.id === id)
    if(bookIndex === -1) res.status(404).json({ "message": "Libro no encontrado" })
    else{
        const { title, author, year } = req.body
        books[bookIndex] = { title, author, year, id: id }
        res.json({ "message": "Libro actualizado", "book": { title, author, year, id }})
    }
    
})

app.delete('/libros/:id', (req, res) => {
    const { id } = req.params
    const bookIndex = books.findIndex((book) => book.id === id)
    if(bookIndex === -1) res.status(404).json({ "message": "Libro no encontrado" })
    else{
        books.splice(bookIndex, 1)
        res.json({ "message": "Libro eliminado", "book": { id: id }})
    }
    
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})