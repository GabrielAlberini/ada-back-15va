// Condicionales -> ejecuta fragmentos de código según el valor de una evaluación
// Tipos de condicionales -> if - operador ternario
// Para entrar al scope (alcance|ambito|bloque) del if la evaluación tiene que ser true
// Sintaxis del if -> if(){} else{}
// Operador ternario -> condición ? si el resultado es true : si el resultado es false
// Operador lógico OR -> || resuelve como true una evaluación cuando una de las evaluaciones en cuestión es true
// Operador lógico AND -> && resuelve como true una evaluación cuando las dos evaluaciones en cuestión son true
// Operadores de comparación (>, <, ===) siempre dan como resultado un valor booleano
// Las variables de tipo const NO pueden declararse sin inicializarse
// Las variables de tipo ler SI pueden declararse sin inicializarse

//const nombre; las variables de tipo const no varian su valor
let apellido; // las variables de tipo const no varian su valor

// console.log(apellido);

// Las variables tienen 3 etapas.

// 1- Declaración: let apellido; -> Reservando espacio en memoria RAM de mi pc
// 2- Inicialización: apellido = "Alberini" -> Asignar VALOR a la variable
// 2- Reasignar: apellido = "Paez" -> Reasignando valor a variable

// Puedo declarar e inicializar una variable en la misma linea: let nombre = "Gabriel";

// const tesisAprobada = "si";
// const tesisAprobada = true;

// Template string -> back ticks -> contatenar string inyectandole datos propios de Javascript

/*
Ejercicio 7:
Crea un programa que emule el juego "Piedra, papel o tijera" y muestre un string
con un mensaje avisando qué jugada ganó (o si hubo empate)
*/

// input -> proceso | almacenamiento -> output

const jugadaUsuario = "piedra";
const jugadaPc = "tijera";
let resultado;

if (jugadaUsuario === jugadaPc) {
  resultado = "Empataste";
} else if (
  (jugadaUsuario === "piedra" && jugadaPc === "tijera") ||
  (jugadaUsuario === "papel" && jugadaPc === "piedra") ||
  (jugadaUsuario === "tijera" && jugadaPc === "papel")
) {
  resultado = "Ganaste";
} else {
  resultado = "Perdiste";
}

console.log(resultado);

// Ejercicio 8:
// Necesitamos un programa que calcule la distancia de un recorrido

// El programa deberá calcular cuánto tiempo tardaría en completar el recorrido en
// distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje:
// Para la distancia {distancia} km en bicicleta el tiempo de viaje es
// {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto
// {resultadoEnAuto} hora/s

// Las velocidades de los medio de transporte son:

// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs

const distacia = 100; //km

const pie = 5; //km/h
const bicicleta = 10; //km/h
const auto = 50; //km/h

const resultadoEnPie = distacia / pie;
const resultadoEnBicicleta = distacia / bicicleta;
const resultadoEnAuto = distacia / auto;

console.log(resultadoEnPie, resultadoEnBicicleta, resultadoEnAuto);

// Para la distancia {distancia} km en bicicleta el tiempo de viaje es
// {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto
// {resultadoEnAuto} hora/s

// template string
//                                 10
console.log(
  `Para la distancia ${distacia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoEnPie} hora/s y en auto ${resultadoEnAuto} hora/s. `
);
