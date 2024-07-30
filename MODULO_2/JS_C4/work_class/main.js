// Solucion de ejercicio con varios condicionales if(){} -> else{}

// const country = prompt("Digita tu pais de origen"); // colombia

// if(country === "colombia"){ // true
//     document.write("Eres colombiano");
// }

// if(country === "panama"){ // false
//     document.write("Eres panameño")
// }

// if(country === "venezuela"){ // false
//     document.write("Eres venezolano")
// }

// if(country === "peru"){ // false
//     document.write("Eres peruano")
// }

// document.write("<br>FIN DEL PROGRAMA")

// Solucion de ejercicio con condicional if(){} -> else if(){} -> else{}

// const country2 = prompt("Digita tu pais de origen"); // panama

// if(country2 === "colombia"){ // true
//     document.write("Eres colombiano");
// } else if(country2 === "panama"){
//     document.write("Eres panameño");
// } else if(country2 === "venezuela"){
//     document.write("Eres venezolano");
// } else if(country2 === "peru"){
//     document.write("Eres peruano");
// } else {
//     document.write("No eres de los paises guardados en sistema");
// }

// document.write("<br>FIN DEL PROGRAMA")


// --------------------------------------------------------------

// const age = parseFloat(prompt("Digita tu edad"));  // 13
// - Si el usuario es menor o igual de 6 años, entra gratis
// - Si el usuario tiene entre 7 y 10 años, su entrada vale $10.000
// - Si el usuario tiene entre 11 y 18 años, su entrada vale $20.000

// if(age <= 6){ // false
//     document.write("<br>Entras gratis")
// } else if(age <= 10){ // false
//     document.write("<br>tu entrada vale $10.000")
// } else if(age <= 18){ // true
//     document.write("<br>tu entrada vale $20.000")
// }

// -------------------------------------------------------------
// Reto: (if/else if/ else)
// Un programa que calcule el precio de entrada a un bar
// - Tiene que preguntar el genero de la persona (male/female)
// - Tiene que preguntar la edad

// - Los menores de 18 años (sean hombres o mujeres) -> NO PUEDEN INGRESAR
// - Las mujeres siempre entran gratis
// - Los mayores de 18 años -> Pagan un cover de $30.000

// const genero = prompt("Digita tu genero (male ó female)") // male
// const age2 = Number(prompt("Digita tu edad")) // 35

// if(age2 < 18){
//     document.write("No puedes ingresar")
// } else if(genero === "female"){
//     document.write("Ingresas Gratis")
// } else{
//     document.write("Pagaras $30.000")
// }

// -------------------------------------------------------------------
// Cree un programa que pida a él usuario un color de camiseta y una talla (S/M/L/XL)
// El programa debe decirle a él usuario cuantas camisetas hay disponibles
// En base a la siguiente tabla

// azules de talla L -> 4 camisetas
// azules de talla M -> 10 camisetas
// azules de talla S -> 8 camisetas
// amarilla de talla M -> 6 camisetas
// verde de talla S -> 2 camisetas
// De los demás colores y tallas no hay disponibles

// .toLowerCase() -> Convierte todo a minuscula
// .toUpperCase() -> Convierte todo a mayuscula
const color = prompt("Digita un color").toLowerCase(); // AZUL
const size = prompt("Escriba una talla de camiseta").toLowerCase(); // L

if(color === "azul" && size === "l"){
    document.write("Hay 4 disponibles en talla L");
} else if(color === "azul" && size === "m"){
    document.write("Hay 10 disponibles en talla M");
} else if(color === "azul" && size === "s"){
    document.write("Hay 8 disponibles en talla S")
} else if(color === "amarillo" && size === "m"){
    document.write("Hay 6 disponibles en talla M");
} else if(color == "verde" && size === "s"){
    document.write("Hay 2 disponibles en talla S");
} else {
    document.write("De los demás colores y tallas no hay disponibles")
}


var numberA = prompt()
var numberB = prompt()
var operar = prompt("Digite que operacion desea realizar (suma, resta, *, /)")