//Eres un mensajero y estás escribiendo un programa para rastrear el estado de una entrega. El cliente desea saber si su paquete ha sido entregado, está en camino o si aún no ha sido enviado. El estado de la entrega se determina por el código de seguimiento y la siguiente regla:

// Si el código de seguimiento es 0, el paquete aún no ha sido enviado.
// Si el código de seguimiento es mayor que 0, el paquete está en camino.
// Si el código de seguimiento es menor que 0, el paquete ha sido entregado.

// input -> procesamiento || almacenamiento -> output
// 1° declarar variables 2° utilizar los datos

// declarar | inicializar | reasignar (en caso de que sea necesario)
// const codigoDeSeguimiento = 1;
// let estadoDeLaEntrega = "";

// if (codigoDeSeguimiento === 0) {
//   estadoDeLaEntrega = "El paquete no ha sido enviado";
// } else if (codigoDeSeguimiento > 0) {
//   estadoDeLaEntrega = "El paquete está en camino";
// } else {
//   estadoDeLaEntrega = "El paquete ha sido entregado";
// }

// console.log(estadoDeLaEntrega);

//------------------------------------------------------------------

//operador ternario se reserva para una validacion de solo if / else PERO, se pueden evaluar multiples evaluaciones

//sintaxis operador ternario: condición ? true : false

// codigoDeSeguimiento === 0
//   ? (estadoDeLaEntrega = "El paquete no ha sido enviado")
//   : (estadoDeLaEntrega = "El paquete ha sido entregado");

// codigoDeSeguimiento === 0
//   ? (estadoDeLaEntrega = "El paquete no ha sido enviado")
//   : codigoDeSeguimiento > 0
//   ? (estadoDeLaEntrega = "El paquete está en camino")
//   : (estadoDeLaEntrega = "El paquete ha sido entregado");

// console.log(estadoDeLaEntrega);

//Descripción: Dado un número que representa la edad de una persona, determinar en qué categoría de edad se encuentra.

// < 18 = menor de edad
// > 18 = adulto
// > 65 = adulto mayor

// const edad = 65;
// let categoriaEdad;

// if (edad < 18) {
//   categoriaEdad = "menor de edad";
// } else if (edad >= 18 && edad < 65) {
//   categoriaEdad = "mayor de edad";
// } else {
//   categoriaEdad = "adulto mayor";
// }

// //concatenación con back stick
// console.log(`1: La categoria de la persona es: ${categoriaEdad}`);
// //concatenación con signo +
// console.log("2: La persona es: " + categoriaEdad);

// Descripción: Calcular el IMC de una persona en base a su peso (en kilogramos) y su altura (en metros). Luego, mostrar un mensaje según el resultado obtenido.

// Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente.
// Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable.
// Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso.
// Si su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad.

const pesoEnKg = 71;
const alturaEnMts = 1.7;
let resultadoImc;

const imc = pesoEnKg / (alturaEnMts * alturaEnMts);

if (imc <= 18.5) {
  resultadoImc = "bajo peso";
} else if (imc > 18.5 && imc <= 24.9) {
  resultadoImc = "peso normal";
} else if (imc > 24.9 && imc <= 29.9) {
  resultadoImc = "sobrepeso";
} else {
  resultadoImc = "obesidad";
}

console.log(
  `El indice de masa porporal indica: ${resultadoImc}. ${imc.toFixed(2)}`
);

// Verificar si el usuario puede iniciar sesión.

// usuario no puede estar vacio
// constraseña no puede estar vacio

//Hay que usar operador ternario

const usuario = "gabriel";
const constrasenia = "f982j347tr92y4";
let handleLogin = false;

// evaluacion ? true : false

//   true     y        false
usuario != "" && constrasenia != "" ? (handleLogin = true) : handleLogin; // opcion 1

//    false     o     false
// usuario == "" || constrasenia == "" ? (handleLogin = true) : handleLogin; // opcion 2 NO SE PUEDE

console.log(handleLogin);
