## Ejercicio 1:

1. Explicar y documentar en un archivo **ejercicio-1.md** la estructura y funcionalidad de la siguiente clase.

2. Dar 2 ejemplos de su uso. Como se crea un nuevo objeto a través de la clase y como se utilizan tanto las propiedades como los métodos de la misma.

```javascript
// Versión con POO y más propiedades/métodos

// Definición de la clase Persona
class Persona {
    nombre;
    edad;
    genero;
    
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.amigos = [];
    }

    // Método para presentarse
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}.`);
    }

    // Método para añadir un amigo
    agregarAmigo(amigo) {
        this.amigos.push(amigo);
        console.log(`${this.nombre} agregó a ${amigo.nombre} como amigo.`);
    }

    // Método para mostrar la lista de amigos
    mostrarAmigos() {
        if (this.amigos.length === 0) {
            console.log(`${this.nombre} no tiene amigos.`);
        } else {
            console.log(`${this.nombre} tiene los siguientes amigos:`);
            this.amigos.forEach(amigo => {
                console.log(`- ${amigo.nombre}`);
            });
        }
    }
}

```

---

## Ejercicio 2:

### Realizar el desafio con  funciones  y luego pasarlo a clases. Realizar el mismo en un archivo llamado: **ejercicio-2.js**

- Crea un programa en JavaScript para gestionar la información de libros utilizando únicamente funciones. Deberás implementar dos funciones principales: crearLibro y mostrarInformacionLibro.

### Función para Crear un Libro (crearLibro):

1. La función debe recibir tres parámetros: titulo, autor y año.

2. Debe devolver un objeto que represente un libro con las propiedades titulo, autor y año, utilizando las variables pasadas como argumentos.

Función para Mostrar Información de un Libro (mostrarInformacionLibro):

3. La función debe recibir un objeto libro como parámetro.
Debe imprimir en la consola la información del libro en el siguiente formato: "Título: [TÍTULO], Autor: [AUTOR], Año: [AÑO]".
 
### Uso de las Funciones (libro1):

- Crea un objeto libro1 utilizando la función crearLibro con valores como 'El señor de los anillos', 'J.R.R. Tolkien', 1954.

- Utiliza la función mostrarInformacionLibro para mostrar la información del libro1 en la consola.