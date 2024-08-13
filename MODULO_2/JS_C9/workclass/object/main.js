// Vamos a ver el ultimo tipo de dato
// OBJETOS
// Los objetos son un tipo de dato mixto que tiene diferentes propiedades

// const dog = {
//     name: "firulais",
//     age: 5,
//     color: 'negro',
//     raza: "criollo",
//     estaVacunado: true
// }

// console.log("Este es mi objeto perro: ", dog)

// // Puedo consultar una sola propiedad de mi objeto
// console.log("Como se llama el perro?", dog.name)

// // El perro esta vacunado?
// const estaVacunado = dog.estaVacunado
// console.log(`El perro esta vacunado? ${estaVacunado}`);

// ---------------------------------------------------------

// const product = {
//     nombre: "celular",
//     color: ['negro', 'verde', 'blanco', 'gris'],
//     marca: 'Iphone',
//     cantidadStock: 150,
//     precio: 5000000,
//     descuento: 10, //10%
//     disponibleEntregaInmediata: true
// }

// console.log("La marca del producto es: ", product.marca)

// Reto: Si el producto esta disponible para entrega inmediata
// vamos a imprimir "Lo recibiras hoy"
// si no, vamos a imprimir "Lo recibiras despues"

// if(product.disponibleEntregaInmediata){
//     console.log('Lo recibiras hoy')
// } else {
//     console.log('Lo recibiras Despues')
// }

// Operaciones con los objetos

//1. Puedo sobreescribir una propiedad
// product.marca = "Xiaomi";
// console.log(product);
//2. Puedo agregar una propiedad
// product.sePuedeFinanciar = false;
// console.log(product);
//3. Puedo quitar una propiedad
// delete product.nombre
// console.log(product);

// ----------------------------------------
const dog1 = {
    name: "firulais",
    age: 5,
    color: 'negro',
    raza: "criollo",
    estaVacunado: true,
    // saludar: function () {
    //     console.log("Hola soy firulais")
    // },
    saludar: () => {
        console.log("Hola soy firulais")
    }
}

// console.log("Nombre del perro?", dog.name)
// console.log("Cual es la edad del perro?", dog.age)
// dog.saludar();

// --------------------------------------------------------

const product = {
    nombre: "celular",
    identificador: 1212,
    color: ['negro', 'verde', 'blanco', 'gris'],
    marca: 'Iphone',
    cantidadStock: 150,
    precio: 5000000,
    descuento: 500000, //10%
    disponibleEntregaInmediata: true,
    obtenerPrecioTotal: () => {
        const precioTotal = product.precio - product.descuento
        return precioTotal
    },
    isColorAvailable: (colorSolicitado) => {
        const colorDisponible = product.color.includes(colorSolicitado)
        return colorDisponible
    }
}

const priceTotal = product.obtenerPrecioTotal()
console.log("El precio total del producto es: ", priceTotal);

const disponibleEnVerde = product.isColorAvailable("verde");
console.log("El producto esta disponible en color verde?", disponibleEnVerde);

const disponibleEnMorado = product.isColorAvailable("morado")
console.log("El producto esta disponible en color morado?", disponibleEnMorado);

// ---------------------------------------------------

// arreglo dentro de objeto
const colores = {
    color: ['negro', 'verde', 'blanco', 'gris']
}

// objetos dentro del arreglo

const perros = [
    {name: "firulais", age: 5, raza: "Cocker"},
    {name: "Dante", age: 3, raza: "Pastor Australiano"},
    {name: "canela", age: 7, raza: "Criollo"}
]

console.log("Cuantos años tiene el perro1", perros[0].name);

// ---------------------------------------------------

// Reto:
// 1. Crear un objeto que se llame pelicula
// 2. Tiene varias propiedades
// - nombre
// - año de lanzamiento
// - edadMinima -> 15
// - funcion que se llame disponibleParaUsuario (edadUsuario) -> Debe retornar si puedo
// ver la pelicula o no

