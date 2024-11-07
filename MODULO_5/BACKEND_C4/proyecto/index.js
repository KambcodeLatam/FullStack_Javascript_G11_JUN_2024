import * as fs from 'fs';

const pokemonsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const createPokemonFiles = async(ids) => {
    try {
        for (const id of ids){
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const response = await fetch(url)
            const data = await response.json()
            const {name, weight, height, abilities} = data
            const content = `
                Nombre: ${name}, 
                Altura: ${height}, 
                Peso: ${weight},
                Habilidades: ${abilities.map(ability => ability.ability.name).join(', ')}
            `
            fs.writeFile(`./pokemons/${name}.txt`, content, (error) => {
                if(error) {
                    console.error('Error: ', error)
                    return
                }
                console.log(`Archivo ${name}.txt creado`)
            })
        }
    } catch (error) {
        console.log(error)
    }
}

createPokemonFiles(pokemonsIds)

// const filesData = [
//     {id: 'file1.txt', content: 'Hola Mundo 1'},
//     {id: 'file2.txt', content: 'Hola Mundo 2'},
//     {id: 'file3.txt', content: 'Esto es una prueba'},
// ]

// const createFiles = (files) => {
//     try {
//         for (const file of files){
//             const {name, content} = file
//             // console.log(name, content)
//             fs.writeFile(name, content, (error) => {
//                 if(error) {
//                     console.error('Error: ', error)
//                     return
//                 }
//                 console.log(`Archivo ${name} creado`)
//             })
//         }
//     } catch (error) {
//         console.error('Error: ', error)
//     }
// }
// createFiles(filesData)

// CRUD = Create, Read, Update, Delete (Crear, Leer, Actualizar, Borrar)

// Eliminar archivo unlink

// fs.unlink('./texto.txt', (error) => {
//     if(error) {
//         console.error('Error: ', error)
//         return
//     }
//     console.log('Archivo eliminado') 
// })

//Crear archivo

// crea un archivo nuevo, si ya existe, lo sobreescribe
// fs.writeFile('./texto.txt', 'Hola Mundo 2', (error) => {
//     if(error) {
//         console.error('Error: ', error)
//         return
//     }
//     console.log('Archivo creado') 
// })
// open elimina la informacion, o crea un archivo nuevo
// fs.open('./texto.txt', 'w', (error, file) => {
//     if(error) {
//         console.error('Error: ', error)
//         return
//     }
//     console.log('Archivo creado ') 
// })

// appendFile agrega texto al archivo, si no existe, lo crea
// const createFile = () => {
//     fs.appendFile('./texto.txt', 'Hola Mundo', (error) => {
//     if(error){
//         console.error('Error: ', error)
//         return
//     }
//     console.log('Texto agregado')
// })}

// fs.readFile('./texto.txt', {encoding: 'utf-8'}, (error, data) => {
//     if(error) {
//         createFile()
//         return
//     }
//     console.log(data) 
// })


// Crear Streams de lectura

// const leerArchivo = fs.createReadStream('./texto.txt', { encoding: 'utf-8'})

// leerArchivo.on('open', () => {
//     console.log('Archivo abierto')
// })

// leerArchivo.on('data', (chunk) => {
//     console.log('Chunk: ', chunk)
// })

// leerArchivo.on('end', () => {
//     console.log('Lectura de archivo finalizada')
// })


// const bufferEjemplo2 = Buffer.from('Hola Mundo');
// console.log(bufferEjemplo2)

// console.log(bufferEjemplo2.toString())

// bufferEjemplo2[3] = 'z'.charCodeAt(0)

// console.log(bufferEjemplo2.toString())