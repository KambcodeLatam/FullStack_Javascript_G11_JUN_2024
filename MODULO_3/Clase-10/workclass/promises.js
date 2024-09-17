// Promesa
// Una promesa en JavaScript es un objeto que representa el resultado eventual de una operación asíncrona.
// Puede estar en uno de tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected).
// Puedes crear una nueva promesa utilizando el constructor Promise. Este constructor toma una función ejecutora con dos argumentos: resolve y reject.
// resolve se utiliza cuando la operación asíncrona se ha completado correctamente, y reject se utiliza cuando ha ocurrido un error.

const miPromesa = new Promise((resolve, reject) => {
    const todoOk = true;
    if (todoOk) {
        resolve('Operacion exitosa');
    } else {
        reject('Falló!!');
    }
});

// Las promesas poseen tres metodos: then, catch y finally.
// El metodo then obtiene el resultado exitoso de la promesa.
// El metodo catch captura el error en caso de que la promesa tenga un resultado fallido.
// El metodo finally siempre se ejecutará pase lo que pase, si la promesa es resuelta o si es fallida.

/*miPromesa
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('Finalizo!'));*/


// Encadenamiento de promesas:
// Una de las características más poderosas de las promesas es la capacidad de encadenar múltiples operaciones asíncronas de forma secuencial.

miPromesa
    .then(resultado => {
        console.log('Resultado promesa 1: ', resultado);
        return 'prestame $2000';
    })
    .then(resultado => {
        console.log('Resultado promesa 2: ', resultado);
        return 'prestame $7000';
    })
    .then(resultado => {
        console.log('Resultado promesa 3: ', resultado);
        return 'Prestame $3000';
    })
    .then(resultado => {
        console.log('Resultado promesa 4: ', resultado);
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Seguiremos siendo amigos!'));
