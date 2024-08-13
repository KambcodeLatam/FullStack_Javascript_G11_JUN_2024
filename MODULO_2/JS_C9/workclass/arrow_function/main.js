//  Vamos a ver el ultimo tipo de dato
// Tipos de datos

// 1. String
// 2. Numerico
// 3. Boleanos
// 4. Arreglos
// 5. funciones

// function sayHello () {
//     console.log('Hola soy una funcion');
// }

// sayHello();

// arrow function || funcion flecha
// Es una nueva forma de escribir funciones en JS para guardarlas en una varible

// const sayHello2 = () => {
//     console.log('Hola soy una funcion flecha');
// }

// sayHello2();

// Otro ejemplo

const isAdult = (age) => {
    const result = age > 18
    console.log("Es adulto?", result)
    return result
}

const personISAdult = isAdult(19)
console.log("Una persona de 19 años es adulta?", personISAdult)

// 