// Realizar un programa que indique cual es el número mayor entre dos numeros.
// Usar operador ternario (cond ? true:false)

// let num1 = 1;
// let num2 = 2;

// const resultado =
//   num1 > num2 ? `El nro 1 es mayor: ${num1}` : `El nro 2 es mayor: ${num2}`; // todos los operadores de comparación devuelven un booleano

// console.log(resultado);

// Ejercicio 2:
// Repetir el primer ejericicio pero ahora mostrando el número mayor entre 3
// números. Usar sentencia if.

// const num1 = 10;
// const num2 = 11;
// const num3 = 3;
// let mayor;

// mayor = num1;
// if (num2 > num3) {
//   mayor = num2; // num2 = 11
// }
// if (num3 > mayor) {
//   mayor = num3;
// }

// console.log(mayor);

// if (num1 > num2 && num1 > num3) {
//   resultado = "el numero 1";
// } else if (num2 > num1 && num2 > num3) {
//   resultado = "el numero 2";
// } else {
//   resultado = "el numero 3";
// }

// console.log(`El mayor es ${resultado}`);

// let dato1 = 8;
// let cuadradoDato1 = 65;

// let resultado = dato1 * dato1; // 64

// // 64     ===      65                   true                      false
// resultado === cuadradoDato1 ? console.log("acierto") : console.log("se produjo un error");

// const edad = 13
// const edadMinima = 18

// const handleMensajeEdad = edad >= edadMinima ? "Puedes pasar" : `Lo siento, sos menor de edad, debes esperar ${edadMinima - edad} años` 

// console.log(handleMensajeEdad)

// let opcion ="CaRne";

// switch (opcion.toLocaleLowerCase()){ // carne === carne? false
//     case "carne":
//         console.log("La bebida es vino tinto");
//         break;
//     case "pescado":
//         console.log("La bebida es vino blanco");
//         break;
//     case "verdura":
//         console.log("La bebida es agua");
//         break;
//     default:
//         console.log("elija carne, pescado o verdura");
//         break;
// }

// let creditos= 5;
// let salas=""; // Consolas. Juegos 2D. Juegos 3D. 

// if(creditos >= 1) {   // true
//   salas = salas + "Consolas. "
// }
// if (creditos >= 2) { // true
//   salas = salas + "Juegos 2D. "
// }
// if( creditos >= 3) { // false
//   salas = salas + "Juegos 3D. "
// }
// if(creditos >= 4) { // false
//   salas += "Realidad Virtual. "
// }
// if(creditos >= 5) { // false
//   salas += "Mario Kart. "
// }

// console.log(`Las salas a las que puedes acceder con tus créditos son: ${salas}`)

// if (creditos >= 4){
//     salas += "Realidad Virtual."; // ACÁ UTILIZO EL += es un operador aritmético, se utiliza para sumarle una valor a cierta variable.
// } else if(creditos === 3){
//     salas += "Juegos 3D.";
// } else if( creditos ===2 ){
//     salas +="Juegos 2D."
// } else if( creditos === 1){
//     salas +="Consolas."
// } else{
//     salas += "NINGUNA. Volvé a comprar tus créditos!"
// }
// console.log(`Las salas a las que puedes acceder con tus créditos son: ${salas}`)

// let miNota= 8.1;
// let notaObtenida;

// switch(true){
//     case miNota === 0 || miNota <=4 :
//         notaObtenida = "Desaprobado.";
//         break;
//     case miNota === 5 || miNota === 6 :
//         notaObtenida= "Aprobado.";
//         break;
//     case miNota === 7 || miNota === 8:
//         notaObtenida = "Notable.";
//         break;
//     case miNota === 9 || miNota === 10 :
//         notaObtenida = "Sobresaliente.";
//         break;
//     default:
//         notaObtenida= "La nota indicada no está dentro del rango, debe ser del 1 al 10"; // dejo el default para advertir que indique una nota del rango 1/10
//         break;
// }
// console.log(`Tu nota es ${miNota}. ${notaObtenida}`);

// switch(miNota) { 
//   case 0:
//   case 1: 
//   case 2:
//   case 3:
//   case 4:
//     notaObtenida = "Desaprobado"
//     break;
//   case 5:
//   case 6:
//     notaObtenida = "Aprobado"
//     break;
//   case 7: 
//   case 8:
//     notaObtenida = "Notable"
//     break;
//   case 9:
//   case 10:
//     notaObtenida = "Sobresaliente"
//     break;
//   default: 
//     notaObtenida = "Ingrese una nota valida"
//     break;
// }

// console.log(`Tu nota es ${miNota}. ${notaObtenida}`);


