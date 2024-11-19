## Tarea: Crear una API Básica con Express

### Objetivos

1. Continuar trabajando con la API creada en la tarea pasada.
2. Implementar dos endpoints accesibles mediante el método POST, PUT y DELETE.
3. Utilizar un array o un archivo .json como base de datos.

### Descripción de la tarea

Vamos a continuar con la API de estdiantes creada en la clase pasada. Ahora vamos a impmenetar nuevos endpoints para crear, actualizar y borrar estudiantes. La API debe tener tres endpoints adicionales:

1. `POST /students:` Este endpoint debe crear a un nuevo estudiante, para ellos por medio de body parameters debes recibir los datos necesarios para crear un estudiante
    (`name`, `age` y `major`).

    **Importante:** El identificador `id` de cada estudainte debe ser único, tu API debe generar un id único para cada estudiante. Este puede ser auto-incremental, es decir, si el último estudiante en tu base de datos tiene el id 6 entonces tu api debe guardar a el nuevo estudiante con el id 7.

2. `PUT /students/:id` Este endpoint lo vamos a utilizar para actualizar uno o varios datos de un estudiante, es decir, si se envia como body parameter `name` solo vamos a actualizar el nombre de el estudiante; si por el contrario se envia `name` y `age` debemos actualizar los dos valores.

    **Importante:** Los unicos datos que se pueden actualizar son `name`, `age` y `major`; el id de el estudiante es único y no debe permitirse actualizar. 

    Además, tu endpoint debe primero verificar si el id enviado en la URL pertenece a un estudiante, si no se encuentra el estudiante, debe devolver un mensaje de error apropiado.

3. `DELETE /students/:id`: Este endpoint debe permitir eliminar un estudiante específico basado en el ID proporcionado en la URL. Al igual que el endppoint pasado si el id enviado no corresponde a un estudiante en la base de datos debemos retornar un mensaje de error.

4. Amplia la documentacion y prueba tu API usando postman y envia la evidencia a el docente. Puedes agregar un archivo README.md a tu API para documentar como usarla y agregar los pantallazos de postman

### Validaciones extra

Como punto extra para los endpoints de creación y actualización te proponemos hacer validaciones a los datos, ejemplo la edad de usuario debe  ser un número y no puede ser negativo, de lo contrarío se debe generar un error y el usuario no puede ser creado ni actualizado. 

Tambien puedes validar que el nombre no se nullo o un string vacío.

### Importante

Si usaste un archivo JSON como base de datos debes usar la librería `fs` para sobreescribir el archivo una vez crees, actualizes o borres  a un estudiante.

