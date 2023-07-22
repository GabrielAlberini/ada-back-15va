// Escribe un programa que determine si una persona es mayor de edad (18 años o más).

const edad = 18;
const esMayorDeEdad = edad >= 18; // booleano (si o no)
console.log("No eres mayor de edad porque me dio:", esMayorDeEdad);
console.log(`No eres mayor de edad porque me dio: ${esMayorDeEdad}`);

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//18
edad >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

// Un estudiante quiere saber si puede ir a una fiesta. Solo puede ir si ha estudiado al menos 2 horas y es viernes o sábado.

// const dia = "viernes";
// const horasDeEstudio = 1;
//           true       o     flase
//                 true                      y        false
if ((dia === "viernes" || dia === "sabado") && horasDeEstudio >= 2) {
  console.log("Puedes salir");
} else {
  console.log("No puedes salir");
}

const viernes = true;
const sabado = false;
const hDeEstudio = 1;

// true   o false
//      true         y      false
(viernes || sabado) && hDeEstudio > 1
  ? console.log("Puedes salir")
  : console.log("No puedes salir");

