// let shoppingList = [];

// Carrito de compras de la forma larga y menos eficiente
// const element = prompt('Ingresa algo a la lista de compras'); // arroz
// shoppingList.push(element)
// console.log('lista de compras', shoppingList);

// const element2 = prompt('Ingresa algo a la lista de compras'); // manzanas
// shoppingList.push(element2)
// console.log('lista de compras', shoppingList);

// const element3 = prompt('Ingresa algo a la lista de compras'); // naranjas
// shoppingList.push(element3)
// console.log('lista de compras', shoppingList);

// Carrito de compras de la forma corta y más eficiente
// let shoppingList = [];

// for(let counter = 1; counter <= 5; counter++){
//     const element = prompt('Ingresa algo a la lista de compras');
//     shoppingList.push(element)
//     console.log('lista de compras', shoppingList);
// }
// arroz
// manzanas
// peras
// document.write(`Agregaste ${shoppingList.length} elementos a la lista`)

// De la manera menos eficiente
// document.write("<li>", shoppingList[0], "</li>") // arroz
// document.write("<li>", shoppingList[1], "</li>") // manzanas
// document.write("<li>", shoppingList[2], "</li>") // peras

// De la forma eficiente

// for(let element = 0; element < shoppingList.length; element++){
//     document.write("<li>", shoppingList[element], "</li>")
// }

// RETO
// let numero = []
// generar un arreglo (lista) que tenga los numeros del 1 al 1000
// console.log(numero) -> [1, 2, 3, 4... 1000]

// volvemos 8:55

// let numeros = [];

// for(let limit = 1; limit <= 1000; limit++){
//     numeros.push(limit);
// }

// console.log(numeros);

let product = ['pan', 'leche', 'uvas']
console.log("Dentro de la lista esta el producto uvas?", product.includes("bananos"))
