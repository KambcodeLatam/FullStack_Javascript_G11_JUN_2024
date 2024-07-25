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


// Igualdad (==)
// La igualdad compara los valores sin tener en cuenta los tipos de Datos
document.write("<br>",2 == 2) // -> true
document.write("<br>","2" == 2) // -> true
document.write("<br>","colombia" == "Colombia", "Este es el ejemplo de colombia") // false

// Igualdad Exacta (===)
// La igualdad exacta compara los valores y los tipos de Datos
document.write("<br>", 5 === 5) // true
document.write("<br>", "5" === 5); // false
document.write("colombia" === "Colombia", "Este es el ejemplo de colombia") // false

// CONDICIONALES (if / else)
// if(CONDICION){QUE QUEREMOS QUE PASE}
// else{}
// Un programa que identifique si un usuario es mayor de edad ó no (>= 18)
// var age = prompt("Digita tu edad"); // 25

// if(age >= 18){
//     document.write("<br>Eres mayor de edad");
// } else{
//     document.write("<br>Eres menor de edad");
// }

// document.write("<br>FIN DEL PROGRAMA");

// RETO 1: Hacer un programa que pregunte a èl usuario su nacionalidad,
// - Si el usuario digita que es de Colombia, imprimir un mensaje que diga "Eres Colombiano"
// - Si el usuario coloca otra nacionalidad diferente a Colombia, imprimir un mensaje que 
// diga "Eres de otra nacionalidad"

// var nacionalidad = prompt("Digita tu nacionalidad");
// if(nacionalidad === "colombia"){
//     document.write("<br>Eres Colombiano");
// } else{
//     document.write("<br>Eres de otra nacionalidad");
// }
// RETO 2: Escribe un programa que pida a el usuario ingresar un numero y luego determine
// si es positivo o negativo

var number = Number(prompt("Digita un numero")); // 17
if(number >= 0){
    document.write("<br>Tu numero es positivo");
} else {
    document.write("<br>Tu numero es negativo");
}

