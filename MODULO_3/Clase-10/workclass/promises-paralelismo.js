// Manejo de multiples promesas (cuando ninguna promesa depende de otra)

// Promise.all
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve cuando TODAS las promesas en el array se han resuelto,
// o se rechaza tan pronto como una de las promesas en el array es rechazada.
// El valor resuelto es UN array con los valores de resolución de cada una de las promesas en el mismo orden que el array original.
// Respeta el orden de llegada de las promesas
/*const promesa1 = new Promise(resolve => setTimeout(() => resolve(1), 5000));
const promesa2 = Promise.resolve('Promesa 2');
const promesa3 = Promise.reject({ a: 1 });
const promesa4 = Promise.resolve(true);

// Resultado si todos son resolve: [ 1, 'Promesa 2', { a: 1 }, true ]
// Resultado si hay tan solo un reject: { a: 1 }
Promise.all([ promesa1, promesa2, promesa3, promesa4 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));*/


// Promise.allSettled
// Similar a Promise.all, pero espera a que todas las promesas se resuelvan o se rechacen, sin importar su resultado.
// Retorna UNA promesa que se resuelve con UN array de objetos que describen el resultado de cada promesa.
// Respeta el orden de llegada de las promesas
/*const promesaSettled1 = new Promise(resolve => setTimeout(() => resolve(1), 5000));
const promesaSettled2 = Promise.reject('Oops algo fallo en el servidor');
const promesaSettled3 = Promise.resolve(2);

Promise.allSettled([ promesaSettled1, promesaSettled2, promesaSettled3 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));*/


// Promise.race
// Este método toma un array de promesas y devuelve UNA nueva promesa que se resuelve o se rechaza 
// tan pronto como UNA de las promesas en el array se resuelve o se rechaza,
// con el valor o la razón de resolución de esa primera promesa.
// No respeta el orden de llegada.
// No prioriza los resultados exitosos, le da igual la primera que llegue la toma.
/*const promiseRace1 = new Promise(resolve => setTimeout(() => resolve(1), 5000));
const promiseRace2 = new Promise((_, reject) => setTimeout(() => reject('Promesa 2 rechazada'), 2000));
const promiseRace3 = Promise.reject('Promesa 3 rechazada');

Promise.race([ promiseRace1, promiseRace2, promiseRace3 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));*/


// Promise.any
// Este método toma un array de promesas y devuelve UNA nueva promesa que se resuelve tan pronto como UNA de las promesas en el array se resuelve.
// Si todas las promesas son rechazadas, la promesa devuelta es rechazada con un AggregateError que contiene todos los errores de rechazo.
// No respeta el orden de llegada siempre y cuando no haya promesas rechazadas.
// Prioriza los resultados exitosos
/*const promiseAny1 = Promise.reject('Promise 1 rejected');
//const promiseAny2 = new Promise((resolve) => setTimeout(() => resolve('Promesa 2 resuelta'), 5000));
const promiseAny2 = new Promise((_, reject) => setTimeout(() => reject('Promesa 2 rechazada'), 5000));
const promiseAny3 = Promise.reject('Promise 3 rejected');

Promise.any([ promiseAny1, promiseAny2, promiseAny3 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));*/