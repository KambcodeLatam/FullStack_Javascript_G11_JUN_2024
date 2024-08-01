const name = "Daniel";

// document.write("Hola ", name, 2024, " Esto es un saludo", name); // -> Comilla soble ""
// document.write('<br>Hola ', name, 2024); // -> Comilla simple ''

// template literals -> Interpolar los diferentes tipos de datos con variables
// document.write(`<br>Hola ${name} 2024 Esto es un saludo ${name}`); // tilde invertida para hacer un template literal

var numero1 = 5;
var numero2 = 2;
var operacion = "+"

if(operacion === "+"){
    var result = numero1 + numero2
    document.write("El resultado de la suma es ", result);
}