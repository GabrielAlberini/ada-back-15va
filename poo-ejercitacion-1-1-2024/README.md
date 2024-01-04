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
