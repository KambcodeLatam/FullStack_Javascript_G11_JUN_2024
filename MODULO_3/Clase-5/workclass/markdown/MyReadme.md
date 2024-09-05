<!--HEADERS-->
# H1
## H2
### H3
#### H4
##### H5
###### H6

<!--Texto en cursiva-->
esto es un texto en *cursiva*

<!--Texto en bold-->
esto es un texto en **negrita**

<!--Texto tachado (strikethrough)-->
esto es un texto que esta ~~tachado~~

<!--Texto combinado con bold y cursiva-->
este texto combina bold con **astericos y _underscores_**

<!--Listas y sublistas-->
Lista desordenada:
- mandarina
- banano
- fresa

* mandarina
* banano
* fresa

Lista ordenada:
1. Tarea 1
2. Tarea 2
3. Tarea 3

Lista ordenada con subslistas
1. Primero ir al supermercado
2. Comprar los alimentos:
    * Arroz
    * Carne
    * Otro alimento
3. Cocinar el plato

<!--Links-->
[Soy un inline-style link](https://react.dev/learn)

[Soy un inline-style link con titulo](https://react.dev/learn "React documentation")

[Soy un link con un referencia numérica][1]

[1]: https://react.dev/learn

[link que se referencia asi mismo]

[link que se referencia asi mismo]: https://react.dev/learn

<!--Imagenes-->
Inline-style:

<!--Imagen remota-->
![Logo angular](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Angular_gradient.png/1200px-Angular_gradient.png)

<!--Imagen local-->
![Logo angular viejo](resources/angular-logo.png)

![img de homero](resources/homero.gif)

Reference-style:

<!--Imagen remota-->
![some text][logo]

[logo]: https://c0.klipartz.com/pngpicture/497/691/sticker-png-angularjs-data-binding-web-application-angular-angle-triangle-logo-web-application-line-thumbnail.png

<!--Imagen local-->
![some text][logoLocal]

[logoLocal]: resources/angular-logo.png


<!--Código-->
`console.log('Hello world);`

```javascript
const num = 1;
console.log('El número es: ' + num);
```

```python
print("Hello world from python")
```

```
Cualquier texto normal
Incluso un tag html <b>Tag</b>
```


<!--Separadores de texto-->
---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

---
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


<!--Tablas-->
| Producto | Precio | Cantidad |
| -------- | ------ | -------- |
| Iphone   | 2500   | 5        |
| Mac      | 4500   | 5        |


| Producto   | Precio | Cantidad |
| ---------- | ------ | -------- |
| *Iphone*   | `2500` | **5**    |
| *Mac*      | `4500` | _5_      |


<!--Quotes-->
> Esta es una mención especial para recordar algo

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English


<!--Videos-->
Video simple con link

[Video sobre NodeJs](https://www.youtube.com/watch?v=i3OdKwuBjeM&ab_channel=Fazt)

Video con imágen:

[![Logo del video](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuD732ViY3bpYmao2cGKxs_isTZN-N9sRwKPHQbHaAFA&s)](https://www.youtube.com/watch?v=i3OdKwuBjeM&ab_channel=Fazt)


<!--
    RETO: Crear un documento markdown con la info personal (nombre, apellido, edad, foto con negrita) y justo abajo
    deben crear una tabla con tres columnas que son HTML, CSS y Javascript y en cada (una sola) fila darle la valoracion
    en cuanto a su gusto por dicha tecnologia.
-->
# Datos Personales

![Foto](https://media.licdn.com/dms/image/v2/D5603AQHQecVEdk-C3A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1679003850456?e=1730937600&v=beta&t=GYZtiOeOFyyVd5ykCN_fHuGDkYUPSozjLpeDhaqZnUY)

**Nombre:** *William* 

**Apellido:** *Saldarriaga Núñez*
**Edad:** *42 Años* 

## Gusto por tecnologÍas

| HTML | css | JS |
| ---- | --- | -- |
|  5   |  5  | 5  |

> Califique el gusto por las tecnologás anteriormente descritas, donde :\
1: *Nada*\
2: *Poco*\
3: *Neutral*\
4: **Mucho**\
5: **Muchisimo**