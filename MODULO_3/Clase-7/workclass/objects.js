// OBJETOS
// Los objetos en JavaScript son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas.
// Comparados con otros tipos de datos como strings, números y booleanos, los objetos pueden contener múltiples valores y métodos.

// Sintaxis
const objetoGeneral = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['perro', 'gato'],
    saludar: () => console.log('Hello world'),
    objetoInterno: {
        a: 1,
        b: 'hola',
        c: {
            z: 60
        }
    }
};

console.log(objetoGeneral);

// La forma antigua de hacerlo
let persona = {};
console.log(persona);
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 25;
persona.nacionalidad = 'Colombiana';
console.log(persona);

// Acceder a las propiedades de un objeto
console.log(objetoGeneral.edad);
console.log(objetoGeneral.animales);
console.log(objetoGeneral.objetoInterno.b);
console.log(objetoGeneral.objetoInterno.c.z); // objetoGeneral.objetoInterno.c.z.?.?.?
objetoGeneral.saludar();

objetoGeneral.profesion = 'Programador';
console.log(objetoGeneral.profesion);
console.log(objetoGeneral);

// Eliminar una propiedad
delete objetoGeneral.edad;
console.log(objetoGeneral);
console.log(objetoGeneral.edad);


// Otras formas de crear objetos

// Object.create
const infoPersona = {
    nombre: 'Ana',
    apellido: 'Suarez',
    edad: 20,
    direccion: 'Calle 3',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion); // {}
console.log(infoProfesion.nombre); // Ana
console.log(infoProfesion.apellido); // Suarez
infoProfesion.profesion = 'Diseñadora';
infoProfesion.experiencia = 5;
infoProfesion.cargo = 'jefe';
console.log(infoProfesion);
console.log(infoProfesion.profesion);
console.log(infoProfesion.experiencia);
console.log(infoProfesion.cargo);
// Asi podria ver que hereda los objetos creados con Object.create
//console.log(infoProfesion.__proto__);
//console.log(Object.getPrototypeOf(infoProfesion));


// Object.assign
const objeto1 = { a: 'cualquier cosa', b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

const objetoFinal = Object.assign({}, objeto1, objeto2, objeto3);
console.log('objetoFinal: ', objetoFinal);
objetoFinal.w = 5;
console.log(objetoFinal);


// Object.freeze
const personFreeze = {
    nombre: 'Cesar',
    edad: 30,
    mascotas: ['tortuga', 'iguana'],
    objetoInterno: {
        ab: 1
    }
};

Object.freeze(personFreeze);
// No tiene efecto porque el metodo freeze evita cualquier modificacion sobre el objeto (propiedades)
personFreeze.nombre = 'Juan';
personFreeze.edad = 18;
personFreeze.direccion = 'Calle 1'; // Lo mismo aqui, no deja agregar nueva propiedades
console.log(personFreeze);

personFreeze.mascotas.push('gato');
console.log(personFreeze);
//personFreeze.mascotas = ['perro']; esto no me deja hacerlo porque cambio toda la referencia del array
personFreeze.objetoInterno.ab = 2;
// personFreeze.objetoInterno = { ac: 2 }; esto no me deja hacerlo porque cambio toda la referencia del objeto
personFreeze.mascotas.pop();
// personFreeze.mascotas = []; esto no me deja hacerlo porque cambio toda la referencia del array
console.log(personFreeze);