// Tipos de Datos en JS

// 1. String o Cadenas de Texto -> Con comillas
// "CSS -> Es el estilo que le damos a nuestra pagina"
// 'Kambcode'
// "Kambcode"
// "Yo tengo 45 años"

// 2. Numericos -> Sin comillas
// 45
// 2024
// 1000000
// 3.1416

// 3. Boleanos
// True -> verdadero
// False -> falso


// Variables (var)
// Es la forma de almacenar un dato para modificarlo, presentarlo o utilizarlo

var precio = 49.08;
document.write('El precio de los audifonos es: $', precio);

// camelCase -> costoDeEnvio
var costoDeEnvio = 10;
var iva = 4;

// Ejemplos String
var nombreProducto = "Audifonos Negros";
document.write("<br>", nombreProducto); // "Aufinos negros"

// Redeclarar Variables
nombreProducto = "Razer BlackShark V2 X Auriculares para gamer:";
document.write("<br>", nombreProducto); // "Razer BlackShark V2 X Auriculares para gamer:"


// Operar datos y operar variables
// suma +
// resta -
// multiplicar *
// dividir /

var precioTotal = precio + costoDeEnvio + iva; // 49.08 + 10 + 4 = 63.08
document.write("<br>", precioTotal);

var precioTotalX2 = precioTotal * 2; // 126.16
document.write("<br>",precioTotalX2)

// alert("Esto es una alerta, porfavor dele aceptar para continuar");


// prompt -> El usuario puede colocar cualquier cosa
var nombreUsuario = prompt("Esta es una alerta. Porfavor escriba su nombre") // Daniel
document.write("<br> Hola, bienvenido a la pagina, su nombre es: ", nombreUsuario);


var altura = prompt("Por favor digita tu altura en Cm")