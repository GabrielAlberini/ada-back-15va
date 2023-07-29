// TIPOS DE DATOS

//datos primitivos -> representan un valor individual
let nombre = "gabriel"; // string

//datos complejos/compuesto -> para usar x valor, hay que acceder mediante la posición

const prod1 = "Maquina de cortar el pasto";
const prod2 = "Velador";

// array y objetos
// array son listas -> elementos estan ordenados y para acceder a uno en especifico hay que indicar la posición

//creando un array
// const carritoDeCompra = ["cartuchera", "lapiz", "velador", "cargador", "pincel", "mochila"]

//ver en consola el array
// console.log(carritoDeCompra)

// length -> gallina tiene huevos
// console.log(carritoDeCompra.length)

// accediendo a la primera posición -> javascript empieza a contar desde el 0
// console.log(carritoDeCompra[0]) // cartuchera
// console.log(carritoDeCompra[3]) // velador

// acceder al ultimo elemento de un array
// console.log(carritoDeCompra[carritoDeCompra.length - 1])

// datos primitivos -> inmutables porque guardan el valor en el momento de la creación

// let x = 3
// let y = x // 3
// console.log(y)
// x = 10
// console.log(y)

// // datos complejos -> mutables porque guardan la refencia
// const cartuchera = ["lapiz"]
// const cartuchera2 = cartuchera;
// console.log(cartuchera2)
// cartuchera2.push("lapicera") // agrega un elemento al final de un array
// console.log(cartuchera)

// array muere array, de array cambiar a un string o un number

// Método para agregar un elemento al final del array
// carritoDeCompra.push("lapicera", "mochila", "alpargata")

// // Método para agregar un elemento al comienzo del array
// carritoDeCompra.unshift("maquinita de fuyi")

// // Método para eliminar un elemento al comienzo del array
// carritoDeCompra.shift()

// // Método para eliminar un elemento al final del array
// carritoDeCompra.pop()

// Método para eliminar x elementos de un array
// carritoDeCompra.splice(1, 2)
// const carritoDeCompra = ["lapicera", "mochila", "alpargata"]
// carritoDeCompra[5] = "foco"
// console.log(carritoDeCompra)

// bucle ->  repetición de un bloque de código que se repite hasta que una condición da false

// let numMaximo = 5;

// // variable de inicialización -> condición -> incremento o decremento
// for(let i = 1; i <= numMaximo; i++){
//   console.log(i);
// }

// El elemento 1 del array es mochila
// El elemento 2 del array es cartuchera
// El elemento 3 del array es piano

// let carritoDeCompra = ["mochila", "mate", "casa", "perro", "enano de jardin"]

// // variable de inicialización -> condición siempre da true -> incremento o decremento
// for(let i = 1; i < carritoDeCompra.length; i++ ) {
//   console.log(carritoDeCompra[i])
// }

// creacion de variable
// condicion
// ejecución de código
// incremento o decremento

// i++ es igual a i = 1

// Suma de elementos en un array
// const arr1 = [1, 2, 3, 10]
// let sumaDeElementos = 0; // number

// for(let i = 0; i < arr1.length; i++) {
//   sumaDeElementos += arr1[i]
// }

// console.log(sumaDeElementos)

// Ejercicio 3: Encuentra el número más pequeño en un array
// const numeros = [0, 58, 16, 2, 12];
// let numMasChico = numeros[0]; // 4

// for (let i = 0; i < numeros.length; i++) {
//   // 2 en menor que 4?
//   if (numeros[i] < numMasChico) {
//     numMasChico = numeros[i];
//   }
// }

// console.log(`El número más chico del array es: ${numMasChico}`);

// Realiza un programa que calcule el promedio de materias totales y muestre por un lado el promedio.

const alumnos = [
  "Juan",
  10,
  "Miguel",
  10,
  "Matias",
  10,
  "Luis",
  10,
  "María",
  10,
  "Lara",
  8,
  "Marisa",
  9,
  "Luisa",
  10,
  "Máximo",
  10,
  "Lorenzo",
  10,
];

// inputs
let sumaDeNotas = 0;
let cantidadDeNotas = 0;
let estudiantes = [];
let promedio;

for (let i = 0; i < alumnos.length; i++) {
  if (typeof alumnos[i] === "number") {
    // Calculando la suma de las notas
    sumaDeNotas += alumnos[i];
    // Calculando la cantidad de notas
    cantidadDeNotas = cantidadDeNotas + 1;
  } else {
    estudiantes.push(`${alumnos[i]}`);
  }
}

promedio = sumaDeNotas / cantidadDeNotas;

// console.log(`Tu promedio es de: ${promedio}`);

// console.log(`Los estudiantes son: ${estudiantes.join(", ")}`);

let numFin = 10;

for (let i = numFin; i > 0; i -= 1) {
  console.log(i);
}
