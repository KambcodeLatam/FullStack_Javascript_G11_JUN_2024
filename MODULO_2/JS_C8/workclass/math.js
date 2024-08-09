// W3School: HTML y CSS
// EcmaScript: JS

// REPASO Math

// Math es una librearia de Matematicas
// console.log(Math.random()*1000)

// Intervalos con Math.random()*(max-min)+min
const random = Math.random()*(100-50)+50
console.log(random)

// Redondiar un numero Math.round()
const redondear = Math.round(random)
console.log(redondear)

// Redondiar un numero con .toFixed()
console.log(random.toFixed()) // "88"

// Redondiar un numero con Math.floor()
console.log(Math.floor(random))

// Redondiar con parseInt()
console.log(parseInt(random))