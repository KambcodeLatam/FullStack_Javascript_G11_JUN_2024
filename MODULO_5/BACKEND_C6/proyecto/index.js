import http from 'http';

const port = 8080
const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
  ]);
// req = request el usuario les pide, res = response lo que el servidor les responde a los usuarios
const server = http.createServer((req, res) => {
    console.log(req.url)
    switch(req.url){
        case '/':
            res.write('este es el inicio')
            res.end()
            break;
        case '/libros':
            if(req.method === 'GET'){
                res.write(books)
                res.end()
                break;
            }
            if(req.method === 'POST'){
                let body = ''

                req.on('data', (chunk) => {
                    body += chunk
                })

                req.on('end', () => {
                    console.log(body)
                    const { title, author, year } = JSON.parse(body)
                    if(!title || !author || !year){
                        res.writeHead(400)
                        res.write('faltan datos')
                        res.end()
                        return;
                    }
                    // crear un archivo txt con los datos que nos envia el usuario

                    res.writeHead(201)
                    res.write('libro creado')
                    res.end()
                })
                
                
                break;
            }
        default:
            res.writeHead(404)
            res.write('404 not found')
            res.end()
    }
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
