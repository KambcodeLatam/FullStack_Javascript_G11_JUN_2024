export const entregaDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, nombre: 'Juan'},
                {id: 2, nombre: 'Pedro'},
                {id: 3, nombre: 'Maria'}
            ])
        }, 2000)
    })
}

export const obtenerPokemones = async () => {
    console.time('tiempo')
    const datos = await fetch('https://pokeapi.co/api/v2/pokemon')
    const pokemons = await datos.json()
    console.timeEnd('tiempo')
    return pokemons
}