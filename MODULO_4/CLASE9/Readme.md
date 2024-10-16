## useNavigate

- *useNavigate* es un hook que te permite programáticamente cambiar la ubicación (navegar) en tu aplicación.

- Uso básico

1. Importacion

```javaScript
import { useNavigate } from 'react-router-dom';
```

2. Uso:

```javascript

const navigate = useNavigate();

const handleNavigation = () => {
  navigate('/ruta-deseada');
};
```

3. *Navegación con opciones*: Puedes pasar un segundo argumento para modificar el comportamiento de la navegación, como replace:

```javascript

navigate('/ruta-deseada', { replace: true });

```

## useLocation

- *useLocation* es un hook que te permite acceder a la ubicación actual en la que se encuentra tu aplicación.

- Uso básico
1. Importación:

```javascript
Copy code
import { useLocation } from 'react-router-dom';

```

2. Uso:

```javascript
Copy code
const location = useLocation();

console.log(location.pathname); // Muestra la ruta actual
console.log(location.search);    // Muestra la cadena de consulta
```

- *Ejemplo completo*

- Aquí tienes un ejemplo de cómo utilizar ambos hooks en un componente:

```javascript

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate('/otra-ruta');
  };

  return (
    <div>
      <h1>Ruta actual: {location.pathname}</h1>
      <button onClick={handleNavigate}>Ir a otra ruta</button>
    </div>
  );
};

export default MyComponent;
```


## URLSearchParams

- *URLSearchParams* te permite manejar los parámetros de consulta de una URL de manera sencilla.

- Creación de un objeto URLSearchParams

- Puedes crear un objeto URLSearchParams a partir de una cadena de consulta o de un objeto:

```javascript
Copy code
// Desde una cadena de consulta
const params = new URLSearchParams('?nombre=Juan&edad=30');

// Desde un objeto
const paramsFromObject = new URLSearchParams({
  nombre: 'Juan',
  edad: 30
});
```

- *Métodos útiles*

- *get(nombre)*: Obtiene el valor de un parámetro.

```javascript
Copy code
const nombre = params.get('nombre'); // "Juan"
```

- *has(nombre)*: Verifica si un parámetro existe.

```javascript
Copy code
const tieneEdad = params.has('edad'); // true
```

- *set(nombre, valor)*: Establece o actualiza el valor de un parámetro.

```javascript
Copy code
params.set('edad', 31);
```

- *append(nombre, valor)*: Agrega un nuevo valor a un parámetro existente.

```javascript
Copy code
params.append('hobby', 'fútbol');
```

- *delete(nombre)*: Elimina un parámetro.

```javascript
Copy code
params.delete('edad');
```

- *toString()*: Devuelve la cadena de consulta.

```javascript
Copy code
const queryString = params.toString(); // "nombre=Juan&hobby=fútbol"
```


- Ejemplo de uso en React

- Aquí tienes un ejemplo de cómo utilizar URLSearchParams junto con useLocation en un componente de React:

```javascript
Copy code
import React from 'react';
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const nombre = params.get('nombre');
  const edad = params.get('edad');

  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <h2>Edad: {edad}</h2>
    </div>
  );
};

export default MyComponent;
```



