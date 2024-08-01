// Hay 2 formas de crear ciclos/bucles/loops en JS (while y for)

// Login con condiconal if/else
// const contraseña = prompt("Digita tu contraseña");

// if(contraseña === "kambcode"){
//     document.write("Tienes Acceso a la pagina");
// } else {
//     document.write("Acceso denegado");
// }

// document.write('<br>Fin del programa');

// Login apartir de ciclos
// while -> contiene una variable incial, condicion, (incremento/decremento ó contador)
// Ciclo -> Es algo que se repite apartir de una condicion
// Iteracion -> Las veces que se repite nuestro ciclo 

// var password = prompt("Digita tu contraseña"); // daniel123

// while(password != "kambcode"){ // true
//     console.log('Acceso Denegado');
//     password = prompt("Contraseña Incorrecta, Intenta de Nuevo"); // jorge123
// }

// document.write('<br>Fin del programa');

// ---------------------------------------------------------------------------
// EXERCISE -> Hacer un programa que imprima los numeros del 1 al 100
// Manera incorrecta
// document.write("<br>",1)
// document.write("<br>",2)
// document.write("<br>",3)
// ...
// document.write("<br>",100)

// De la manera correcta con ciclo while

// var number = 1;

// while(number <= 100){ // true
//     document.write(number, "<br>"); // 100
//     number = number + 1; // number = 100 + 1 = 101
// }

// document.write('Fin del programa');

// --------------------------------------------------
// RETO 1: Hacer un programa que cuente de 2 en 2 hasta 50 (2, 4, 6, 8... 50)
// RETO 2: Hacer lo mismo del reto 1, de forma decendente (50, 48, 46, 44...2)
// numero2 = numero2 + 2 es igual a numero2 += 2
// var numero2 = 2;
// while(numero2 <= 50){
//     document.write(numero2,"<br>")
//     numero2 += 2
// }

// var number2 = 50
// while(number2 >= 2){
//     document.write(number2,"<br>")
//     number2 -= 2
// }


//------------------------------------------
// Ciclo while
// numero = numero + 1 es igual a numero++
// var numero = 1;

// while(numero <= 100){
//     document.write(numero, "<br>")
//     numero++
// }

// Ciclo for
// for(variable inicial; condicion; incremento){
// Lo que quiero que haga}

// for(var numero = 1; numero <= 1000; numero++){
//     document.write(numero, "<br>")
// }

// Hacer un porgrama que muestre la tabla del 3 (3X1=3... 3X10=30)
// 3X1=3
// Hola mundo
// Hola mundo
// Hola mundo
// 3X2= 6
// Hola mundo
// Hola mundo
// Hola mundo
// 3X3=9
// Hola mundo
// Hola mundo
// Hola mundo
for(var inicial = 1; inicial <= 10; inicial++){
    const tableResult = 3 * inicial
    document.write(`3 X ${inicial} = ${tableResult} <br>`);
    for(var parrafo = 1; parrafo <= 3; parrafo++){
        document.write("Hola mundo<br>")
    }
}

document.write("FIN")