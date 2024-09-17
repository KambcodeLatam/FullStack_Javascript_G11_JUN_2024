function mostrarDato(callback) {
    console.log(typeof callback);
    console.log(callback);
    console.log('-----');
    callback();
}

//mostrarDato(100);
//mostrarDato('abcd');
//mostrarDato(true);
//mostrarDato(null);
//mostrarDato(undefined);
//mostrarDato(['a', 15]);
//mostrarDato({ abcd: 150 });

// Un proceso de callback require como minimo dos funciones:
// 1. La funcion que recibe ese callback como parametro conocida como funcion de alto orden -> mostrarDato
// 2. El mismo callback que se envia como parametro de la funcion de alto orden -> function() { console.log('hello world') }
const callbackFn = function() { console.log('hello world') }
const callbackFn2 = function() { console.log('hola mundo') }
// mostrarDato(function() { console.log('hello world') });
mostrarDato(callbackFn);
mostrarDato(callbackFn2);


// Practiquemos
const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 18
    },
    {
        nombre: 'Catalina',
        apellido: 'Jimenes',
        edad: 25
    },
    {
        nombre: 'Federico',
        apellido: 'Martinez',
        edad: 17
    },
];

// RETO
// 1. Filtrar los estudiantes mayores de edad usando el metodo filter de los arrays de js 
// y tambien hacerlo de la forma tradicional usando ciclos normales (for) con una funcion propia
const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.edad >= 18);
const estudiantesMenoresDeEdad = estudiantes.filter(estudiante => estudiante.edad < 18);
const estudiantesNombreEmpiezaPorJ = estudiantes.filter(estudiante => estudiante.nombre.startsWith('J'));
console.log(estudiantesFiltrados);
console.log(estudiantesMenoresDeEdad);
console.log(estudiantesNombreEmpiezaPorJ);

function myFilter(callback) {
    const newArray = [];

    for (let i = 0; i < estudiantes.length; i++) {
        const pasoCondicion = callback(estudiantes[i]);
        if (pasoCondicion) {
            newArray.push(estudiantes[i]);
        }
    }

    return newArray;
}

//myFilter(1);
//myFilter('hola');

const estudiantesFiltrados2 = myFilter(estudiante => estudiante.edad >= 18);
const estudiantesMenoresDeEdad2 = myFilter(estudiante => estudiante.edad < 18);
const estudiantesNombreEmpiezaPorJ2 = myFilter(estudiante => estudiante.nombre.startsWith('J'));
console.log(estudiantesFiltrados2);
console.log(estudiantesMenoresDeEdad2);
console.log(estudiantesNombreEmpiezaPorJ2);



// 2. Hacer un programa que me simule el proceso de descargar un video.
// Hay que garantizar el orden de estos pasos:
// 1. Descargar el video: 6 segundos
// 2. Procesando video: 4 segundos
// 3. Video descargado

const descargarVideo = (callback) => {
    setTimeout(() => {
        console.log('Descargando video...');
        callback(); // procesarVideo -> 'Procesando video...'
    }, 6000);
}

const procesarVideo = (callback) => {
    setTimeout(() => {
        console.log('Procesando video...');
        callback(); // videoDescargado -> 'Video descargado!'
    }, 4000);
}

const videoDescargado = () => {
    console.log('Video descargado!');
}

/*
    descargarVideo();
    procesarVideo();
    videoDescargado();
*/

// Callback hell
descargarVideo(() => {
    procesarVideo(() => {
        videoDescargado();
    });
});
