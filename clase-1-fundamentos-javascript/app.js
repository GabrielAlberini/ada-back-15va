/* Esto 
es 
un
comentario */

//Esto es un comentario

//DECLARA UNA VARIANBLE
let nombre = "Gabriel";
let apellido = "Alberini";

console.log(nombre, apellido);

let num1 = 1;
let num2 = 2;

console.log(num1 + num2);

let num3 = 10;
let num4 = 2;

console.log(num3 / num4);

// hola => string
// 3 => number
// "3" => string

// concatena
let concatenacion = 3 + "3";
console.log(typeof concatenacion);

let p1 = "HO";
let p2 = "LA";

console.log("La frase final es:", p1 + p2);

// let colorFavorito = prompt("Ingrese su color favorito");

// console.log("El color ingresado es:", colorFavorito);

//CALCULADORA

//input
// let numero1 = Number(prompt("Ingrese número 1:"));
// let numero2 = Number(prompt("Ingrese número 2:"));

//process - storage
// let resultado = numero1 + numero2;

//output
// console.log(resultado);

//-------------------------------------------

let base = Number(prompt("Ingrese la base del triángulo:"));
let altura = Number(prompt("Ingrese la altura del triángulo:"));

let area = (base * altura) / 2;

console.log("El area del triángulo es:", area, "metros.");
