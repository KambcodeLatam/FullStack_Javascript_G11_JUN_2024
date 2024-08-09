// FUNCIONES
// Una funcion en javaScript es un bloque de codigo REUTILIZABLE, que realiza una
// tarea especifica

// Crear una aplicacion que pregunte su edad y con esta edad decirle a la persona en 
// que año nacio

// De la forma menos eficiente
// const person = 'Camilo'
// const personAge = 36

// const birthDate = 2024 - personAge
// console.log(`Hola ${person}, tu naciste en el año ${birthDate}`)


// const person2 = 'Ana'
// const person2Age = 32

// const birthDate2 = 2024 - person2Age
// console.log(`Hola ${person2}, tu naciste en el año ${birthDate2}`)

// const person3 = 'Yonatan'
// const person3Age = 28

// const birthDate3 = 2024 - person3Age
// console.log(`Hola ${person3}, tu naciste en el año ${birthDate3}`)

// De la forma eficiente utlizando funciones
// function name (parametros ò argumentos){}

// function calcularFechaDeNacimiento(edad){
//     const birthDate = 2024 - edad
//     console.log(`Hola, tu naciste en el año ${birthDate}`)
// }

// calcularFechaDeNacimiento(35)

// const personAge2 = 32
// calcularFechaDeNacimiento(personAge2);

// const personAge3 = 28
// calcularFechaDeNacimiento(personAge3);

// RETO

// const person1 = "Pablo";
// const person2 = "Pedro";
// const person3 = "Laura";

// Escribe una funcion que reciba un nombre y que salude a la persona
// Ejm. console.log("Hola", personName)
// function sayHello

// sayHello(person1); // Hola Pablo
// sayHello(person2); // Hola Pedro
// sayHello(person3); // Hola Laura

// --------------------------------------------------
// 1. Vamos a crear una funcion que calcule el IMC de una persona
// imc = peso / (altura * altura).
// 2. Luego con este IMC, vamos a enviar un mensaje
// - Si el IMC de la persona es mayor a 10 -> "Su IMC esta elevado"
// - Si el IMC de la persona es menor a 10 -> "Su IMC esta bien"

// Return: En una funcion se utiliza el return para devolver un valor desde la funcion
// al lugar donde fue llamada

function calcImc (peso, altura){
    const result = peso / (altura * altura) // 0.14
    // return result // 0.14
}

const imc = calcImc(59, 20); // 0.14
console.log(imc)

if(imc > 10){
    console.log("Su IMC esta elevado");
} else {
    console.log("Su IMC esta bien");
}