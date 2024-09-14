// CODIGO SINCRONO
// Una tarea sincrona es una tarea que tiene un tiempo de ejecucion especifico
// y que el lenguaje ejecutara inmediatamente no importa cuanto tarde, por lo
// que hará esperar a la siguiente linea del codigo hasta que la anterior linea
// se haya terminado de ejecutar.
// Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
// thread(hilo --> proceso que la aplicacion puede usar para completar tareas)
// En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

// Ejemplo de JS sincrono
/*for (let i = 0; i < 15000; i++) {
    console.log(i);
}

console.log('tarea 2');
console.log('tarea 3');*/


// CODIGO ASINCRONO
// Una tarea asincrona es una tarea que se va a ejecutar en el futuro (o presente)
// bien sea con un tiempo establecido o no y que no sabemos con exactitud cuando va a terminar.
// JavaScript asincrono nos permite ejecutar tareas simultaneamente

/*setTimeout(() => {
    console.log('Ejecutando tarea 1...');
}, 5000);

console.log('Ejecutando tarea 2...');

setInterval(() => {
    console.log('Ejecutando tarea 3...');
}, 2000);*/


// Hay tres tecnicas para implementar JavaScript asincrono:
//1. callbacks
//2. promises (then y catch)
//3. async await

// Callbacks
// ¿Qué es una callback?
// Una callback es una función que se pasa como argumento a otra función y que se ejecuta después de que cierto proceso o tarea haya finalizado.
// Es como dejar un número de teléfono para que te llamen cuando algo esté listo.

// ¿Cómo se usa una callback?
// En JavaScript, las callbacks son comunes en situaciones donde se realiza una operación asíncrona, como cargar un archivo o realizar una solicitud a un servidor.
// En lugar de bloquear el código y esperar a que se complete la operación, se pasa una función callback que se ejecutará una vez que la operación haya terminado.
// Tambien se pueden usar en funciones de orden superior (High order function) como forma sincrona, que son funciones que pueden recibir como parametro una funcion y/o retornar dicha funcion.

// Sync callbacks -> Se ejecutan inmediatamente (dentro de un proceso) y son bloqueantes
const saludoSergio = () => console.log('Hola Sergio');
const saludoWilliam = () => console.log('Hola William');
const saludoYonatan = () => console.log('Hola Yonatan');
const saludoGenerico = (nombre) => console.log(`Hola soy ${nombre}`);

function mostrarSaludoPersonalizado(callback) {
   console.log(typeof callback);
   callback(); // Esto solo lo puede hacer una funcion
}

/*mostrarSaludoPersonalizado(saludoSergio);
mostrarSaludoPersonalizado(saludoWilliam);
mostrarSaludoPersonalizado(saludoYonatan);*/
/*mostrarSaludoPersonalizado(() => saludoGenerico('Sergio'));
mostrarSaludoPersonalizado(() => saludoGenerico('William'));
mostrarSaludoPersonalizado(() => saludoGenerico('Yonatan'));*/

// Veamos como funciona el forEach por debajo
const animals = ['perro', 'gato'];
//animals.forEach((animal, index) => console.log(animal));

function myForEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        callback(element, i);
    }
}

/*myForEach(animals, (animal, index) => {
    if (animal.startsWith('p')) {
        console.log(index)
        console.log('Tengo un perro')
    } else {
        console.log(`Tengo un ${animal}`);
    }
});

myForEach(animals, (animal) => console.log(`Yo soy un ${animal}`));*/


// Async callbacks -> Se ejecutan cuando algo pasa (un evento ocurre)
// Simulemos un autoservicio de comida rapida
const atenderCarro1 = (callback) => {
    setTimeout(() => {
        console.log('Atendiendo carro 1...');
        callback();
    }, 5000);
}

const atenderCarro2 = (callback) => {
    setTimeout(() => {
        console.log('Atendiendo carro 2...');
        callback();
    }, 2000);
}

const atenderCarro3 = () => {
    setTimeout(() => {
        console.log('Atendiendo carro 3...');
    }, 2500);
}

// Callback hell
atenderCarro1(() => {
    atenderCarro2(() => {
        atenderCarro3();
    });
});
//atenderCarro3();