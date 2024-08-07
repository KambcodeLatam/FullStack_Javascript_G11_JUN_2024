// Tipos de datos:
// String o Cadenas texto
const fullName = "Kambcode Latam"
// Numerico
const age = 3;
// Boleanos
const isAvalibale = true || false

// Arreglos, Listas o Arrays
// Los arreglos son listas o estructuras de datos que permiten almacenar multiples valores
// del mismo tipo de dato o diferentes en una sola variable

// Ejemplos una variable que tiene una lista de productos
// let shoppingList = ['leche', 'pan', 'arroz', 'manzanas', 'peras']
// console.log("Mi lista de compras: ", shoppingList);
// []
const years = [2000, 2001, 2002, 2003, 2024]
// console.log("Arreglo de tipo numerico", years);

const mixedArray = ['kambcode', 3, true, "latam", false, 2024, 59.7]
// console.log("Esto es una lista mixtas", mixedArray);

// Metodos o utilidades de los arreglos .length
// 1. Como saber cuantos elementos tiene un arreglo
// let shoppingList = ['leche', 'pan', 'arroz', 'manzanas', 'peras', 'lentejas'] // 6 elementos
// console.log("Mi listas de compras es: ", shoppingList)
// console.log("La cantidad de elementos que contiene mi listas es: ", shoppingList.length)

// 2. Para agregar elementos a un array usamos el metodo .push()
// shoppingList.push('uvas');
// console.log("Mi nueva listas es: ", shoppingList);
// shoppingList.push("uvas", "queso", "gaseosa");
// console.log("Mi segunda nueva listas es: ", shoppingList);

// 3. Podemos consultar un elemento de la lista en particular
const todoList = ['Hacer la tarea', 'lavar la losa', 'dormir'];
// Elementos -> 3 elementos
// Posiciones -> 0, 1, 2
// console.log("Cantidad de elementos en TODOLIST:", todoList.length);
// console.log("Primer elemento de TODOLIST", todoList[0]); // Hacer la tarea
// console.log("Segundo elemento de TODOLIST", todoList[1]); // Lavar la losa
// console.log("Tercer elemento de TODOLIST", todoList[2]); // dormir
// console.log("Cuarto elemento de TODOLIST", todoList[3]); // undefined

// 4. Podemos reemplazar un elemento de un arreglo
todoList[1] = "Lavarse los dientes";
// console.log('El nuevo arreglo es: ', todoList);

// 5. Podemos saber si el arreglo incluye o no un elemento .includes()
// console.log("El arreglo Todolist incluye dormir?", todoList.includes("dormir"))

// 6. Podemos eliminar un elemento de la lista .splice()
let nombres = ['Daniel', 'William', 'Ana']; // Eliminar a Ana
nombres.splice(0, 2)
console.log(nombres)
