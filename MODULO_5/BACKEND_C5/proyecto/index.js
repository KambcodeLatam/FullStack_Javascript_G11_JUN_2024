import 'dotenv/config'

const baseUrl = process.env.BASE_URL

// [node, index.js, 1]
// [Ejecutable de node, Archivo que se esta ejecutando, Argumentos]

const pokemonId = process.argv[2]

const getPokemon = async (id) => {
    const responsePokeApi = await fetch(`${baseUrl}/pokemon/${id}`)
    const pokemon = await responsePokeApi.json()
    return pokemon
}

const poke = await getPokemon(pokemonId)

const pokeInfo = {
    name: poke.name,
    weight: poke.weight,
    height: poke.height,
    abilities: poke.abilities.map(ability => ability.ability.name),
    id: poke.id
}

console.log(pokeInfo)

// entornos de desarrollo (development, production, testing) esto lo podemos configurar en el .env

// despliegue continuo (CI/CD) -> github actions -> PR -> deploy a dev -> cerrar PR -> deploy a testing

// los programadores desarrollan en un entorno de desarrollo

// import * as fs from 'fs'
// import 'dotenv/config'

// console.log(process.argv)

// const argumentos = process.argv.slice(2)
// // Nombre, Apellido, Edad, Email, cedula
// const [Nombre, Apellido, Edad, Email, cedula] = argumentos

// const createFile = (content) => {
//     fs.writeFile(`./${cedula}.txt`, content, (error) => {
//         if(error){
//             console.error('Error:', error)
//             return
//         }
//         console.log('Archivo creado')
//     })
// }

// const content = `
// Nombre: ${Nombre}
// Apellido: ${Apellido}
// Edad: ${Edad}
// Email: ${Email}
// Cedula: ${cedula}
// `

// createFile(content)