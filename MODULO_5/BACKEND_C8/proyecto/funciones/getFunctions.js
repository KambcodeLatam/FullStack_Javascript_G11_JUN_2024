import fs from 'fs' ;
const books = JSON.parse(fs.readFileSync('books.json', 'utf-8')) ;

export const getTest = (req, res) => {
    res.send('Hola Mundo')
}

export const getBooks = (req, res) => {
    if(books.length === 0) {
        res.status(404).json({ "message": "No hay libros" })
    }
    res.json(books)
}

export const getBooksById = (req, res) => {
    const { id } = req.params
    const book = books.find((book) => book.id === id)
    if(!book) res.status(404).json({ "message": "Libro no encontrado" })
    res.json(book)
}

export const getBooksByName = (req, res) => {
    const { name } = req.params
    const resBooks = books.filter((book) => book.title.toLowerCase().includes(name.toLowerCase()))
    if(resBooks.length === 0) res.status(404).json({ "message": "Libro no encontrado" })
    else res.json(resBooks)
}