// Esto es un comentario de una sola linea

/*
Esto
es un
comentario
*/

//Not a number
console.log(4 * "Hola");

//Number
let number = 1;
//String
let string = "Gabriel";
//NaN
let nan = NaN;

//String "" '' ``
let frase1 = "Hola soy una frase";
let frase2 = 'Hola soy "una" frase';
let frase3 = `Hola soy una frase`;
let frase4 = "Hola soy una 'frase'";

// console.log(frase4);

const nombre = "Tati";

//Back stick
console.log(`Hola, como andas ${nombre}?`);
console.log("Hola, como andas ${nombre}?");

//BOOLEAN => lógicos (true / false)

const llueve = true;
const llueve1 = false;

//EMPTY VALUES => undefined / null

//undefined
let variableVacia;
console.log(variableVacia);

//null
let variableNull = null;
console.log(variableNull);

console.log(4 + 4);
console.log(5 - 5);
console.log(1 * 1);
console.log(1 / 0);
console.log(100 % 2); // 100 / 2 = 50 y de resto queda 0

// si es true entra al if
if (12 % 3 == 0) {
  console.log("Es multiplo de 3");
} else {
  console.log("No es multiplo de 3");
}

// CONCATENACIÓN
let oracion1 = "hola";
let oracion2 = "como estas?";

console.log(oracion1 + " " + oracion2);
console.log(`${oracion1} ${oracion2}`);

//OPERADOR UNARIO

//negar
let estaLloviendo = true;

console.log(!estaLloviendo);

//    true
if (!(11 % 2 == 0)) {
  console.log("Es impar");
}

//OPERADOR DE COMPARACIÓN

/*
> → Mayor que
< → Menor que
>= → Mayor o igual que
<= → Menor o igual que               DEVUELVEN UN BOOLEANO
== → Igual que
=== → Estrictamente igual
!= → Distinto que
*/

console.log(4 > 5); // false
console.log(3 < 2); //false
console.log(18 >= 18); //true
console.log(1 <= -12); // false
console.log(1 == 1); // true
console.log(1 == "1"); // true | comparación de valor
console.log(1 === "1"); // false | comparación de valor y tipo de dato

const password = "2o582934ut2894eryfu4365,ml4m4nk3234";
const dni = 9384729348;

console.log(typeof password);
console.log(typeof dni);
console.log(typeof undefined);

// OPERADORES LÓGICOS && || (AND OR)

const hora = 22;
const clima = "soleado";

//     true    y     false
if (hora > 20 && clima === "nublado") {
  console.log("lleva paraguas porque es de noche y esta nublado");
} else {
  console.log("tranqui, anda no mas");
}

const colorDeSemaforo = "verde";

//       false                  y           false
if (colorDeSemaforo === "rojo" || colorDeSemaforo === "amarillo") {
  console.log("No puedes cruzar");
} else {
  console.log("Puedes pasar");
}

// = asignación
// === comparación

//OPERADORES TERNARIOS ( if pro )

// evaluación ? si es true : si false

const colDeSemaforo = "amarillo";

colDeSemaforo === "rojo" || colDeSemaforo === "amarillo"
  ? console.log("No puedes pasar")
  : console.log("Puedes pasar");

//variables => son espacio reservado en memoria RAM (cuando se reincia el programa o cuando se apaga la pc)

// let | const

let primerNombre = "Gabriel"; // las variables con let se pueden REDECLARAR

primerNombre = "Rosario";

console.log(primerNombre);

const firstName = "Gabriel"; // las variables con const NO se pueden REDECLARAR

// firstName = "Anna";

console.log(firstName);

const sendData = () => {};

// sendData = "pepito";

console.log(sendData);
