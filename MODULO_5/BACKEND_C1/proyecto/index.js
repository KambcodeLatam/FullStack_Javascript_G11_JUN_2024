//spread operator

// const arrayPares = [2,4,6,8,10]
// const arrayImpares = [1,3,5,7,9]

// const arrayNumerosParesEImpares = [2, 4, 7, 2343, 123, ...arrayPares]

// console.log(arrayNumerosParesEImpares)

// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     anio: 2020,
//     color: 'rojo',
//     precio: 20000
// }



// const { marca, color, ...masValores } = carro
// console.log(res)


// const carro = new Object()
// carro.marca = 'Toyota'
// carro.modelo = 'Corolla'
// carro.anio = 2020
// carro.color = 'rojo'
// carro.precio = 20000

// console.log(carro)
// condiciones
//if
// else

// const color = 'azul'

// switch(color){
//     case 'amarillo':
//         console.log('tu color favorito es amarillo')
//         break
//     case 'azul':
//         console.log('tu color favorito es azul')
//         break
//     default:
//         console.log('no conozco tu color favorito')
// }


// edad >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad')


// validacion de edad
// if(edad >= 60){
//     console.log('Eres un adulto mayor')
// }else if(edad >= 18){
//     console.log('Eres mayor de edad')
// }else{
//     console.log('Eres menor de edad')
// }

// const letras = ['U','N','I','V','E','R','S','O']
// let i = 0
// while(i < letras.length){
//     const letra = letras[i]
//     console.log(letra)
//     i+=1
// }
// for (let i = 0; i < letras.length; i++){
//     const letra = letras[i]
//     console.log(letra)
// }



// const personas = [
//     {nombre: 'Juan', edad: 25},{nombre: 'Ana', edad: 30},{nombre: 'Pedro', edad: 45}
// ]



// of devuelve el elemento , in devuelve el indice
// for(const persona in personas){
//     console.log(persona)
// }


// const numeros = [1,2,3,4,5,6]; // array

// const numerosPares = numeros.filter((numero) => {
//     return numero % 2 === 0;
// })

// console.log(numerosPares)