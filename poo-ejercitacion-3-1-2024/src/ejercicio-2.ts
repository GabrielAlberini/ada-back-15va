// ## Ejercicio 2:

// ### Realizar el desafio con  funciones  y luego pasarlo a clases. Realizar el mismo en un archivo llamado: **ejercicio-2.js**

// - Crea un programa en JavaScript para gestionar la información de libros utilizando únicamente funciones. Deberás implementar dos funciones principales: crearLibro y mostrarInformacionLibro.

// ### Función para Crear un Libro (crearLibro):

// 1. La función debe recibir tres parámetros: titulo, autor y año.

// 2. Debe devolver un objeto que represente un libro con las propiedades titulo, autor y año, utilizando las variables pasadas como argumentos.

// Función para Mostrar Información de un Libro (mostrarInformacionLibro):

// 3. La función debe recibir un objeto libro como parámetro.
// Debe imprimir en la consola la información del libro en el siguiente formato: "Título: [TÍTULO], Autor: [AUTOR], Año: [AÑO]".

// ### Uso de las Funciones (libro1):

// - Crea un objeto libro1 utilizando la función crearLibro con valores como 'El señor de los anillos', 'J.R.R. Tolkien', 1954.

// - Utiliza la función mostrarInformacionLibro para mostrar la información del libro1 en la consola.

// const crearLibro = (nombre, autor, anio) => {
//   return { nombre, autor, anio };
// };

// const mostrarInformacionLibro = (libro) => {
//   return `Título: ${libro.nombre}, Autor: ${libro.autor}, Año: ${libro.anio}.`;
// };

// const libro1 = crearLibro("señor de los anillos", "J.R.R Tolkien", 1954);

// const informacionLibro1 = mostrarInformacionLibro(libro1);

// ---------------------------------------------------------------------

class Libro {
  nombre: string;
  autor: string;
  anio: number;

  constructor(nombre: string, autor: string, anio: number) {
    this.nombre = nombre;
    this.autor = autor;
    this.anio = anio;
  }

  mostrarInformacion() {
    return `Título: ${this.nombre}, Autor: ${this.autor}, Año: ${this.anio}.`;
  }
}

const libroUno = new Libro("El perfume", "Patrick Süskind", 1985);

const libroDos = {
  titulo: "Test",
  autor: "test",
  anio: 1,
};

console.log(libroDos instanceof Libro);
