const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/plain' });

    res.end('Hola, Kambcode Backend M5');
});

server.listen(PORT, () => {
    console.log(`Servidor está siendo escuchado ${PORT}`)
})

console.log('Esta es mi aplicación, después de instalar Nodemon');
console.log('Soy estudiante de Kambcode');
console.log('Soy Jose Luis, y soy el profe');

// Spread operator

// Con arrays
const estudiantes = ["Jose", "Darío", "Janeth", "David"];
const temas = ["HTML", "CSS", "JavaScript", "Node.js"];

const estudianteTema = [...estudiantes, ...temas, "Para cada estudiante, un tema, en orden"];

console.log(estudiantes, temas);

console.log(estudianteTema, "Este es mi array transformado");

// Con objetos

let carro = {
    marca: "Renault",
    referencia: "Logan",
    precio: "$45.000.000"
};

let venta = {
    numeroFactura: "COD458934Renault",
    impuesto: "$2.200.000"
};

const carroVenta = {
    ...carro,
    ...venta
};

console.log(carroVenta);

const myPromise = new Promise((resolve, reject) => {
// Simulando una tarea asíncrona con setTimeout
setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
    resolve(randomNumber);
    } else {
    reject(new Error('El número es menor o igual a 0.5'));
    }
}, 1000);
});
  
  // Manejo de la promesa resuelta
  myPromise.then((result) => {
    console.log('La promesa se resolvió con éxito:', result);
  }).catch((error) => {
    console.error('La promesa fue rechazada:', error.message);
  });

  async function miFuncion() {
    try {
      // Esperar a que se resuelva la promesa antes de continuar
      const resultado = await algunaPromesa();
      console.log('La promesa se resolvió con éxito:', resultado);
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
  }