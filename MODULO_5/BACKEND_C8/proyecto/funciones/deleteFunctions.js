import fs from 'fs' ;
const books = JSON.parse(fs.readFileSync('books.json', 'utf-8')) ;
export const deleteBook = (req, res) => {
    const { id } = req.params
    const bookIndex = books.findIndex((book) => book.id === id)
    if(bookIndex === -1) res.status(404).json({ "message": "Libro no encontrado" })
    else{
        books.splice(bookIndex, 1)
        fs.writeFileSync('books.json', JSON.stringify(books))
        res.json({ "message": "Libro eliminado", "book": { id: id }})
    } 
}