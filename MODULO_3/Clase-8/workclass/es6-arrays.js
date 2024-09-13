// MAP, FILTER, FIND, FOREACH, SOME, EVERY
const numbers = [1,2,3,4,5,6,7,8];

// map: Crea un nuevo array con los resultados de llamar una función (callback) como argumento en cada elemento del array original.
const doubledArr = numbers.map((number) => number * 2);
const mitadArr = numbers.map((number) => number / 2);
console.log(doubledArr);
//console.log(mitadArr);

// Forma de hacerlo sin map
/*const newArray = [];

for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i] * 2;
    newArray.push(result);
}

console.log(newArray);*/


// filter: Retorna un nuevo array con todos los elementos que pasen una condicion proporcionada por una función (callback)
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);

// Forma de hacerlo sin filter
/*const newFilterArray = []; 
for (let i = 0; i < numbers.length; i++) {
    const condition = numbers[i] % 2 === 0;

    if (condition) {
        newFilterArray.push(numbers[i]);
    } 
}

console.log(newFilterArray);*/


// find: Este método retorna el primer elemento de un array que cumple una condicion dada en el callback
// Si no encuentra ningun elemento que cumpla con la condicion, retorna undefined
const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];
const fruta = frutas.find(fruta => fruta.length < 6);
const fruta2 = frutas.find(fruta => fruta.length === 4);
const fruta3 = frutas.find(fruta => fruta.startsWith('m'));
const frutas3 = frutas.filter(fruta => fruta.startsWith('m')); // Filter retorna todos los items que cumplan la condicion

console.log('fruta con menos de 6 letras: ', fruta);
console.log('fruta con 4 letras: ', fruta2);
console.log('fruta que empieza con m: ', fruta3);
console.log('frutas que empieza con m: ', frutas3);

// Forma de hacerlo sin find
/*function find() {
    for (let i = 0; i < frutas.length; i++) {
        const fruta = frutas[i];
        if (fruta.length < 6) {
            return fruta;
        }
    }
}
const frutaEncontrada = find();
console.log(frutaEncontrada);*/


// forEach: Ejecuta una funcion por cada elemento del array (callback). No retorna nada.
numbers.forEach((number, index) => {
    console.log(`${index}`);
    console.log(`${number}`);
    console.log(`----------------`);
});

// Forma de hacerlo sin forEach
/*for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`${i}`);
    console.log(`${number}`);
    console.log(`----------------`);
}*/


// some: Retorna true si al menos un elemento del array cumple con la condicion dada en el callback
// Si no, retorna false
const numeros = [78,65,84,145,190,400,47,12,75];
const esMayorA300 = numeros.some(numero => numero > 300);
const empiezaPor9 = numeros.some(numero => String(numero).startsWith('9'));

console.log('alguno es mayor a 300: ', esMayorA300);
console.log('alguno empieza por 9: ', empiezaPor9);
console.log('alguno esta entre 80 y 150: ', numeros.some(numero => numero >= 80 && numero <= 150));

// Forma de hacerlo sin some
/*function some() {
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero > 1000) {
            return true;
        }
    }

    return false;
}

const resultSome = some();
console.log(resultSome);*/


// every: Retorna true si todos los elementos del array cumplen una condicion dada en el callback.
// Si no, retorna false
const listaEdades = [20,22,25,38,42,17,21];
const todosSonMayoresDeEdad = listaEdades.every(edad => edad >= 18);
console.log(todosSonMayoresDeEdad);

// Forma de hacerlo sin every
function every() {
    for (let i = 0; i < listaEdades.length; i++) {
        const edad = listaEdades[i];
        if (edad < 18) {
            return false;
        }
    }

    return true;
}

console.log(every());


// includes: Retorna true si encuentra un elemento que coincide con el valor que le pasamos como argumento
const includesSomeNumber = numeros.includes(12);
console.log('incluye el numero: ', includesSomeNumber);


// RETO
const numbers1 = [21, 33, 40, 50, 71, 70, 742, 80, 90, 100];

// 1. Retornar un nuevo array con los valores de las raices cuadradas de cada numero (Math.sqrt(n))
const raizCuadradaArr = numbers1.map((number) => Math.sqrt(number))
console.log(raizCuadradaArr);

// 2. Filtrar los numeros que empiecen en 7 y sean pares
const filteredNumber = numbers1.filter(number => String(number).startsWith("7") && number % 2 === 0);
console.log(filteredNumber);