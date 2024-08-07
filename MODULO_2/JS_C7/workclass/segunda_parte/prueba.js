// La libreria de Matematicas en JS Math

// 1. Generar un numero aleatorio Math.random()

// Genera un numero aleatorio entre 0 y 1
// console.log('Mi primer numero aleatorio', Math.random())

// Genera un numero aleatorio entre 0 y 10 Math.random()*10
// console.log('Mi numero aleatorio entre 0 y 10 es: ', Math.random()*10)

// generar un numero aleatorio entre un intervalo entre 15 y 30
// Math.random() * (max-min) + min
// console.log('Mi numero aleatorio entre 15 y 30 es: ', Math.random()*(30-15)+15)

// 2. Math.round() -> Redondear un numero
const numero = Math.random() * 10
const redondeado = Math.round(numero)
console.log(redondeado)
