import fs from 'fs' ;
const books = JSON.parse(fs.readFileSync('books.json', 'utf-8')) ;

export const updateBook = (req, res) => {
    const { id } = req.params
    const bookIndex = books.findIndex((book) => book.id === id)
    if(bookIndex === -1) res.status(404).json({ "message": "Libro no encontrado" })
    else{
        const { title, author, year } = req.body
        books[bookIndex] = { title, author, year, id: id }
        fs.writeFileSync('books.json', JSON.stringify(books))
        res.json({ "message": "Libro actualizado", "book": { title, author, year, id }})
    }
    
}