// Diferencia entre var, const, let
// El var practicamente dentro de una empresa, esta casi que prohibio. Olvidemos utilizar var
// Declarar -> Redeclarar
// Asignar -> Reasignar
// var -> Redeclarar y Reasignar
// const -> NO podemos ni Redeclarar y Reasignar, es un valor que nunca va a cambiar
// let -> No podemos Redeclarar, pero si podemos Reasignar (let es un var mejorado, que evita muchos errores)

// EJEMPLO DE VAR
// var name = 'Kambcode';
var name = 'Daniel' // -> Redeclarar una variable
var age = 35;
age = 40; // -> Reasignar un nuevo valor

// EJEMPLO DE CONST
const apellido = 'Kambcode Latam';
// const apellido = 'William' // Identifier 'apellido' has already been declared (Redeclarando una constante)
// apellido = 'carlos' // Assignment to constant variable. (Reasignar una constante)
document.write(apellido);

// EJEMPLO DE LET
let añoNacimiento = 1978; 
añoNacimiento = 2024;
// let añoNacimiento = 1980; // Identifier 'añoNacimiento' has already been declared
document.write("<br>",añoNacimiento); // 2024
