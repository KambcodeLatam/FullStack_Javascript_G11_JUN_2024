// SCOPE
// En programacion scope(ó ambito) se refiere al contexto dentro del cual se puede acceder
// a variables y funciones (const y let)

// Global Scope
// Pueden ser accedidaas desde cualquier parte del codigo

// let fullName = 'Daniel Cañon';
// if(true){
//     document.write(`Hola tu nombre completo es ${fullName}`); // Hola tu nombre completo es Daniel Cañon
// }
// document.write(`<br>Hola, como estás ${fullName}`);  // Hola, como estás Daniel Cañon

// Local Scope
// Cuando solo puede ser accedida en una parte del codigo
// if(true){
//     const age = 27;
//     document.write(`Hola, tu edad es: ${age}`) // Hola, tu edad es: 27
// }
// document.write(`Hola, tines ${age} años`) // age is not defined

// Block Scope
// {
//     let animal = 'perro'
//     document.write(animal); // perro
// }

// document.write(animal); // animal is not defined