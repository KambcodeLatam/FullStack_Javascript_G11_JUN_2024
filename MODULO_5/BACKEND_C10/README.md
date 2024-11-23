# Backend con Inteligencia artificial

## Objetivos
1. Entender qué es la API de OpenAI y sus capacidades.
2. Aprender a generar un token de autenticación para la API de OpenAI.
3. Integrar la API de OpenAI en un proyecto de Node.js.
4. Crear un endpoint básico que utilice inteligencia artificial.

## Temario

### 1. Introducción a la API de OpenAI

La API de OpenAI permite a los desarrolladores acceder a modelos avanzados de inteligencia artificial, como el modelo GPT-4, para realizar diversas tareas, como generación de texto, traducción, resumen y más. 

#### Capacidades:
- Generación de texto.
- Análisis de sentimientos.
- Traducción de idiomas.
- Resumen de textos.
- Respuestas a preguntas.

### 2. Generar un Token de Autenticación

Para usar la API de OpenAI, necesitas un token de autenticación que puedes obtener desde la plataforma de OpenAI.

#### Pasos:
1. Ve a [OpenAI](https://beta.openai.com/signup/).
2. Crea una cuenta o inicia sesión si ya tienes una.
3. Navega a la sección de API y genera una nueva clave secreta (API key).

### 3. Crear un Proyecto en Node.js

#### Inicializar el Proyecto
```bash
mkdir openai-backend
cd openai-backend
npm init -y
```

#### Instalar Dependencias Necesarias
```bash
npm install express
```

```bash
npm install axios
```

```bash
npm install dotenv
```

- `express`: framework para crear el servidor.
- `axios`: para hacer peticiones HTTP.
- `dotenv`: para manejar variables de entorno.

#### Estructura del Proyecto
```
openai-backend/
├── node_modules/
├── .env
├── package.json
├── package-lock.json
├── app.js
```

### 4. Configuración del Entorno

#### Crear el Archivo `.env`
```env
OPENAI_API_KEY=tu_openai_api_key_aqui
PORT=3000
```

### 5. Implementar el Backend con Node.js

#### Crear el Archivo `app.js`

```javascript
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Endpoint básico para generar texto con OpenAI
app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
           {
                "model": "gpt-4o-mini",
                "messages": [
                    {
                        "role": "user", 
                        "content": prompt
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                }
            }
        );

        res.json(response.data.choices[0].text);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al generar texto');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
```

### 6. Probar el Endpoint

#### Iniciar el Servidor
```bash
node app.js
```

#### Hacer una Petición al Endpoint

Puedes usar herramientas como Postman o curl para hacer una petición POST al endpoint `/generate-text`:

```bash
curl -X POST http://localhost:3000/generate-text \
-H "Content-Type: application/json" \
-d '{"prompt": "Escribe una historia sobre un dragón"}'
```

### Conclusión

En esta clase, hemos aprendido a integrar la API de OpenAI en un proyecto de backend utilizando Node.js. Hemos cubierto desde la obtención de la API key hasta la creación de un endpoint básico que genera texto basado en un prompt proporcionado.
