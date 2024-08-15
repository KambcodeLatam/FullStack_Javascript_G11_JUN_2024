// Repaso
// Return
// Retorna o devuelve el valor que se le especifique, al lugar donde fue la funcion
// Cree una funcion que reciba como parametro el valor de envio y el valor del producto
// y esta funcion debe retornar el precio total del producto (envio + valorProducto)

// Realice una funcion que calcule el precio total del producot (envio + valorProducto) e imprimir
// el valor total

// const calcularPrecio = (envio, valorProducto) => {
//     return envio + valorProducto // 25000
// }

// console.log(calcularPrecio(5000, 20000));

// Cree una funcion que retorne el valor del producto con el 5% de descuento y tambien
// retorne el valor del producto con el 10% de descuento

// NOTA: Nosotros podemos retornar varios valores o variables dentro del return
function calcularDescuento (producto){
    const cincoPorciento =  producto * 5 / 100 // 2500
    const diezPorciento = producto * 10 / 100 // 5000
    return [cincoPorciento, diezPorciento]
}

const mostrar = calcularDescuento(50000)
// console.log(mostrar);

// console.log('El 5% de descuento del producto es: ', mostrar[0])
// console.log('El 10% de descuento del producto es: ', mostrar[1])


// Operadores Ternarios
// Los operdaores ternarios es una manera concisa de escribir una condicion, es otra forma
// a diferencia de if/else if/else.
// condicion ? expresionTrue : expresionFalse

// Cree una programa que envie como mensaje si una persona puede ingresar a una discoteca
// la persona puede entrar si es mayor de edad (18>)

// Condicional if/else
// const edad = 15
// if(edad >= 18){
//     console.log("Puedes Ingresar");
// } else {
//     console.log("Lo lamento, no puedes ingresar");
// }

// Operadores ternarios
const edad = 15;
const mensaje = (edad >= 18) ? "Puedes Ingresar" : "Lo lamento, no puedes ingresar";
// console.log(mensaje);

// Ejemplo de uso con varias condiciones con operadores ternarios
// Cree un programa que apartir de la nota de un alumno, nos envie un mensaje
// nota >= 90 -> "A"
// nota >= 80 -> "B"
// nota >= 70 -> "C"
// nota >= 60 -> "D"
// de lo contrario la nota sera "F"

// if/else if/else
// const nota = 65;

// if(nota >= 90){
//     console.log("A")
// } else if(nota >= 80){
//     console.log("B")
// } else if(nota >= 70){
//     console.log("C")
// } else if(nota >= 60){
//     console.log("D")
// } else {
//     console.log("F")
// }

// Operadores Ternarios
// condicion ? expresionTrue : expresionFalse

// const nota = 75;

// let resultadoCalificacion = (nota >= 90) ? "A"
//                             : (nota >= 80) ? "B"
//                             : (nota >= 70) ? "C"
//                             : (nota >= 60) ? "D"
//                             : "F";

// console.log(resultadoCalificacion);

// -------------------------------------------------------
// Bucle for ... of
// Es util para iterar sobre los elementos de un array

// let arrayNumeros = [1, 3, 5, 7, 9];

// for(let i = 0; i < arrayNumeros.length; i++){
//     console.log(arrayNumeros[i]);
// }

// bucle for...of
// let arrayNumeros = [1, 3, 5, 7, 9];
// for(let num of arrayNumeros){
//     console.log(num)
// }

// RETO: Teniendo un array de numeros, quiero calcular la suma de todos los elementos en
// el array. Utiliza el ciclo for ... of

// let numeros = [10, 20, 30, 40, 50]; // 150
// let suma = 0;

// for(let num of numeros){
//     suma += num
// }

// console.log(suma)

// RETO: Teniendo un array de palabras, deseamos filtrar aquellas que tienen menos
// de 5 caracteres. Utiliza el ciclo for of para recorrer el array y almacenar
// las palabras cortas en un nuevo array

let palabras = ["cafe", "perro", "elefante", "cuaderno", "rata"];
let palabrasCortas = [];

for(let palabra of palabras){
    if(palabra.length < 5){
        palabrasCortas.push(palabra)
    }
}

console.log(palabrasCortas);