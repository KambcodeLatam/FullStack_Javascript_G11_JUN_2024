// Async / await es una característica introducida en ECMAScript 2017 (también conocido como ES8) que simplifica el trabajo con funciones asíncronas y promesas en JavaScript.
// Esta característica permite escribir código asíncrono de manera más legible y mantenible, especialmente cuando se trabaja con múltiples operaciones asíncronas.

/*
    La sintaxis de async/await se compone de dos palabras clave principales: async y await.

    async: Se utiliza para declarar que una función devuelve una promesa. Dentro de una función async, podemos utilizar la palabra clave await para esperar a que se resuelva una promesa.
    await: Se utiliza para pausar la ejecución de una función async hasta que una promesa se resuelva. Esto permite que el código asíncrono se comporte de manera más similar al código síncrono.
*/

// Como usar async
async function obtenerNumero() {
    return ['a'];
}

//console.log(obtenerNumero()); // Promise { ['a'] }


// Como usar async / await
async function getPhoto() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/100');
        console.log(response);
        const photo = await response.json();
        console.log(photo);
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

//getPhoto();


// RETO: Hacer un programa que le ayude a una madre saber si su hijo se portara bien y si obtendra buenas calificaciones
// Si se porta bien Y obtiene buenas calificaciones entonces le compran un telefono (funcion)
// Si se porta mal U obtiene malas calificaciones lo castigan (variable)
// Usar async / await

let comportamiento = true;
let calificaciones = true;

const validarComportamiento = new Promise((resolve, reject) => {
    if (comportamiento) {
        resolve(true);
    } else {
        reject('Paila, sigue intentando');
    }
});

const validarCalificaciones = () => new Promise((resolve, reject) => {
    if (calificaciones) {
        resolve(true);
    } else {
        reject('Paila, sigue intentando');
    }
});

async function evaluarPremio() {
    try {
        /* Solucion bloqueante
        console.log('inicio');
        const cumpleCalificaciones = await validarCalificaciones(); // 20s
        const cumpleComportamiento = await validarComportamiento; // 15s
        console.log('evaluarPremio - cumpleCalificaciones:',cumpleCalificaciones);
        console.log('evaluarPremio - cumpleComportamiento:', cumpleComportamiento);

        if (cumpleCalificaciones && cumpleComportamiento) { // 35s
            console.log('Felicitaciones, te ganaste el premio');
        }*/

        // Solucion no bloqueante
        const [ respCalificaciones, respComportamiento ] = await Promise.all([ validarCalificaciones(), validarComportamiento ]); // 20s

        if (respCalificaciones && respComportamiento) {
            console.log('Te ganaste un telefono');
        }

    } catch (error) {
        console.log('ERROR: ', error)
    }
}

//evaluarPremio();


// Callbacks vs Promises vs async/await

// Garantizar el orden de ejecucion (tarea 1, tarea 2,...) con callbacks
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 1...');
        callback();
    }, 7000);
};

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 3...');
        callback();
    }, 5000);
};

const tarea4 = () => {
    setTimeout(() => {
        console.log('Ejecutando tarea 4...');
    }, 700);
};

/*tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            tarea4()
        });
    });
});*/


// Garantizar orden de ejecución con promises (then y catch)
function generatePromise(tareaId, milliseconds) {
    return new Promise((resolve, reject) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Ejecutando tarea ${tareaId}...`);
            }, milliseconds);
        } else {
            resolve(`Ejecutando tarea ${tareaId}...`);
        }
    });
};

const promise1 = generatePromise(1, 7000);
const promise2 = generatePromise(2, 2000);
const promise3 = generatePromise(3, 5000);
const promise4 = generatePromise(4, 700);

/*promise1
    .then(res => {
        console.log(res);
        return promise2;
    })
    .then(res => {
        console.log(res);
        return promise3;
    })
    .then(res => {
        console.log(res);
        return promise4;
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log('Error: ', err));*/


// Garantizar orden de ejecución con async/await
const task1 = () => generatePromise(1, 7000);
const task2 = generatePromise(2, 2000);
const task3 = () => generatePromise(3, 5000);
const task4 = generatePromise(4, 700);

async function executeTasks() {
    /*Solucion bloqueante
    const resp1 = await task1();
    console.log(resp1);
    const resp2 = await task2;
    console.log(resp2);
    const resp3 = await task3();
    console.log(resp3);
    const resp4 = await task4;
    console.log(resp4); // 15s
    */

    // Solucion no bloqueante
    const [ resp1, resp2, resp3, resp4 ] = await Promise.all([ task1(), task2, task3(), task4 ]); // 7s
    console.log(resp1);
    console.log(resp2);
    console.log(resp3);
    console.log(resp4);
}

executeTasks();