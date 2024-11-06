import { obtenerPokemones } from "./funciones.js";
// Async await 


console.log(await obtenerPokemones())

// function primerPaso(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('el primer paso fue completado')
//             resolve();
//         }, 2000);
//     })
// }

// function segundoPaso(){
//     return new Promise((resolve, reject) => {
//         const success = Math.random() > 0.5;
//         setTimeout(() => {
//             console.log(success)
//             if(success) return resolve('Fue Exitoso')
//                 else return reject('hubo un error en el segundo paso');
//         }, 2000);
//     })
// }

// function tercerPaso(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('el tercer paso fue completado')
//             resolve();
//         }, 2000);
//     })
// }

// const arrayPromesas = [primerPaso, segundoPaso, tercerPaso]

// Promise.all(arrayPromesas).then(() => console.log('todos los pasos fueron completados')).catch((error) => console.log(error)) 



// then() se ejecuta cuando la promesa se resuelve
// primerPaso()
//     .then(segundoPaso).catch((error) => console.log(error))
//     .then(tercerPaso)
//     .then(() => console.log('todos los pasos fueron completados'))
    




// CallBack Hell

// function primerPaso(callback){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('el primer paso fue completado')
//             callback();
//         }, 2000);
//     })
// }

// function segundoPaso(callback){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('el segundo paso fue completado')
//             callback();
//         }, 2000);
//     })
// }

// function tercerPaso(callback){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('el tercer paso fue completado')
//             callback();
//         }, 2000);
//     })
// }

// primerPaso(() => {
//     segundoPaso(() => {
//         tercerPaso(() => {
//             console.log('todos los pasos fueron completados')
//         })
//     })
// })