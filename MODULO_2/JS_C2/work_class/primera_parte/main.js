// Ejemplo de Alertas en una pagina
// alert('Esto es una alerta');
// var alerta = prompt('Esto es una alerta'); //Kambcode
// document.write(alerta); // Kambcode

// Como redondear y controlar los decimales .toFixed();
// var age = 58;
// var midleAge = age/3 ; // 19.56
// document.write("<br> La Tercera parte de su edad es: ", midleAge.toFixed(2)) // 19.33

// ------------------------------------------------------------------------
// COHERSION DE DATOS
// var fullName = "<br>Daniel Cañon";
var fullName = "<br>" + "Daniel " + "Cañon"
document.write(fullName);
var year = "20" + "24" // 2024
var year2 = 20 + 24 // 44
document.write("<br>",year);
document.write("<br>",year2);

// Number() -> Convertir un dato string a numerico
var userAge = Number(prompt("Escriba su edad")); // "37" -> 37;
var userAgePlusTen = userAge + 10;
document.write("<br> Tu edad es ", userAge, " y dentro de 10 años va a ser: ",userAgePlusTen," ", 2024); // 47
// template literals (entre comillas simples invertidas)
document.write(`<br> Tu edad es: ${userAge} y dentro de 10 años va a ser: ${userAgePlusTen} 2024`);

// Receso: Volvemos a las 8:05


