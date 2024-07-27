// Como Comparar Variables
// 1. Igualdad == 18 == (18 -> true)
// 2. Igualdad Exacta === (18 === 18 -> true)
// 3. Mayor > // 18 > 15 -> true
// 4. Menor < // 18 < 15 -> false
// 5. Mayor o igual >= (18 >= 18 -> true)
// 6. Menor o igual <= (18 <= 18 -> true)
// 7. Diferencia != -> (18 != 18 -> false)
// 8. Diferencia Exacta !== 
// 9. Modulo %

// DIFERENCIA !==
// La diferencia es lo contrario a la igualdad
// La difrerncia exacta es lo contrario a la igualdad exacta

// document.write("18" != 18); // false 
// document.write("18" !== 18); // true 

// MODULO %
// Escribe un programa que solicite al usuario ingresar un numero entero y luego determine
// si es par o impar
// El modulo % nos arroja el residuo o el resto de una division

// var numero = Number(prompt("Digita un numero")); // 6/2 = 3 -> residuo = 0

// if(numero % 2 === 0){
//     document.write("El numero es par")
// } else{
//     document.write("El numero es impar")
// }

// ----------------------------------------------
// const nombre = "kambcode";
// const peso = 70;
// const altura = 1.74;
// const alturaM = altura/100;
// const imc = peso / (altura * altura);
// console.log("Hola, esto es una prueba y el IMC es: ", imc);
// -----------------------------------------------

// var vs const
// var: las variables las podemos reasignar, reescribir una variable(setear)
// var nombre2 = "kambcode";
// document.write("<br>", nombre) // kambcode
// var nombre2 = "William"
// document.write("<br>", nombre) // william
// nombre2 = "Daniel"
// document.write("<br>", nombre) // Daniel

// const: Las constantes no cambian, es decir no las podemos reasignar ni reescribir
// Una variable consume mucho mas recursos que una constante
const age = 35;
document.write("<br>",age); // 35
// age = 40; // Assignment to constant variable.
// document.write("<br>",age);  // no se muestra nada

// 
const fullName = "Daniel Cañon";
document.write(fullName);



























