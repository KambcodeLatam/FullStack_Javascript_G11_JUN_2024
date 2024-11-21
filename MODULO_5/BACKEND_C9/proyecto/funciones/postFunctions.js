import fs from 'fs' ;
import { v4 as uuid } from 'uuid' ;
const books = JSON.parse(fs.readFileSync('books.json', 'utf-8')) ;
export const createBooks = (req, res) => {
    const { title, author, year } = req.body
    const id = uuid()
    books.push({title, author, year, id})
    fs.writeFileSync('books.json', JSON.stringify(books))
    res.json({ "message": "Libro creado", "book": { title, author, year, id } })
}