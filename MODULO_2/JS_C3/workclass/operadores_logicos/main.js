const paisDeOrigen = prompt("Escribe tu pais de origen"); // colombia
const edad = Number(prompt("Digita tu edad")); // 7

// Operador &&

// El ciudadano debe ser colombiano y debe tener menos de 18 años
// if(true && false){Lo que queremos hacer si se cumple la condicion general}
// if(paisDeOrigen === "colombia" && edad < 18){
//     document.write("El valor de tu entrada es: $8.000");
// } else {
//     document.write("El valor de tu entrada es: $15.000");
// }

// Operador OR

// if(true || true){}
if(paisDeOrigen === "colombia" || (edad > 5 && edad < 10)){
    document.write("El valor de tu entrada es: $5.000")
} else {
    document.write("El valor de tu entrada es: $10.000")
}


const suscripcion = false;
if(suscripcion){
    document.write("esto es un true");
}