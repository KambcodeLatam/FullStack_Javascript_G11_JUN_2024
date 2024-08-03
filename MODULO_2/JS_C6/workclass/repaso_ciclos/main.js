// const invertir = Number(prompt("Digita la cantidad a invertir")); // 80
// const meses = Number(prompt("Digita los meses que desea invertir")); // 3
// let totalInvertido = 0;

// for(let incial; condicion; incremento)
// for(let analisis = 1; analisis <= meses; analisis++){

//     totalInvertido = totalInvertido + invertir // 0 + 80 = 80
//     document.write(`Mes ${analisis}: ${totalInvertido} <br>`) // Mes 2: 80
// }

// document.write(`<br> Fin, total a ahorrar es: ${totalInvertido}`)

//  Escribir un programa que muestre por pantalla las tablas de multiplicar de acuerdo a lo
// que desee el usuario,

// const limite = parseInt(prompt("Digita el limite de las tablas"));

for(let factor = 1; factor <= 20; factor++){
    document.write(`<br>La tabla del ${factor} <br>`)
    for(let multiplicando = 1; multiplicando <= 10; multiplicando++){
        const result = multiplicando * factor;
        document.write(`${factor} X ${multiplicando} = ${result} <br>`);
    }
}