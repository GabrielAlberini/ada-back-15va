// declaración | asignación | reasignación

// 1- declaración: compu, te reservo este espacio en memoria -> let saludo;
// 2- inicializar: otorgarle valor a una variable (no es necesario en la declaración)
// 3- reasignar: otorgarle un NUEVO valor a una variable

// let saludo = "hola"; // string

// saludo = 980982094; // number

// console.log(saludo);

// const nombre = "gabriel";

// nombre = "Lucia"; no se puede reasignar una variable de tipo const

// console.log(nombre);

// let num = 10; // tipo de dato: number
// let str = "5"; // tipo de dato: string
// let result = num + str;
// console.log(result); // El resultado será "105" porque el número 10 se convierte en una cadena y se concatena con la cadena "5".

// console.log(Number("5"));

// palabra()
// Number()

// let str = "10"; // string
// let num = parseInt(str);
// console.log(num); // Output: 10

// let num = 289342345;
// let str = num.toString(); // método
// console.log(typeof str); // Output: "289342345"

// let cadenaDeTexto = "FemENinO"; // string

// console.log(cadenaDeTexto.includes("x"));

// let carritoDeCompra = "";

// // carrito de compra es true? -> no, porque es undefined y undefined es
// // considerado falsy por ende no valida la condición del if
// if (carritoDeCompra) {
//   console.log(`Tienes ${carritoDeCompra} en el carrito de compras`);
// } else {
//   console.log("Debes agregar al menos un producto en el carrito de compras.");
// }

// let clima = "soleado"; // falsy -> false
// let aviso;

// switch (clima) {
//   case "soleado":
//     aviso = "No lleves paraguas";
//     break;
//   case "nublado":
//     aviso = "Lleva paraguas que se viene o.o";
//     break;
//   default:
//     aviso = "Ingresa un tipo de clima valido";
//     break;
// }

// console.log(aviso);

// let diaDeLaSemanaQueTranscurre = 1; // truthy -> verdadero | true

// dia es menor a 31? SI y dia es mayor o igual a 1? NO
// if (diaDeLaSemanaQueTranscurre < 31 && diaDeLaSemanaQueTranscurre >= 1) {
//   switch (diaDeLaSemanaQueTranscurre) {
//     case 1:
//     case 9:
//       console.log("HAY 50% DE DESCUENTO EN TODO DALE QUE ESPERAS AAAAAAA");
//       break;
//     default:
//       console.log("Hoy no hay descuentos :(");
//       break;
//   }
// } else {
//   console.log("eeeee fijate en que dia estas viviendo pa");
// }

//Ejemplo de como usar IF o switch correctamente segun el caso:
/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%
*/

// const compra = 200;
// const pepe = 23489729;
// let descuento;

// // en la condicion del switch va el DATO que voy a comparar
// switch (compra) {
//   case compra <= 100: // false
//     descuento = 0;
//     break;
//   case compra > 100 && compra <= 300: // false
//     descuento = compra * 0.05;
//     break;
//   case compra > 300 && compra <= 500: // false
//     descuento = compra * 0.1;
//     break;
//   default:
//     descuento = compra * 0.15;
//     break;
// }

// console.log(descuento);

// if (compra <= 100) {
//   descuento = 0;
// } else if (compra > 100 && compra <= 300) {
//   descuento = compra * 0.05;
// } else if (compra > 300 && compra <= 500) {
//   descuento = compra * 0.1;
// } else {
//   descuento = compra * 0.15;
// }

// console.log(descuento);

// const numDiaDeLaSemana = 3;
// let dia;

// // dia de la semana equivale a 3, es decir va a estar en busqueda de la primer concidencia
// // con el numero 3

// switch (numDiaDeLaSemana) {
//   case 1:
//     dia = "Lunes";
//     break;
//   case 2:
//     dia = "Martes";
//     break;
//   case 3:
//     dia = "Miercoles";
//     break;
//   case 4:
//     dia = "Jueves";
//     break;
//   case 5:
//     dia = "Viernes";
//     break;
//   case 6:
//     dia = "Sábado";
//     break;
//   case 7:
//     dia = "Domingo";
//     break;
//   default:
//     dia = "Ingrese un día correcto";
// }

// console.log(dia);

/*
Realizar un programa que indique cual es el número mayor entre dos
numeros.
Usar operador ternario (cond ? true : false)
*/

// let num1 = 1;
// let num2 = 3;

// // false
// const resultado = num1 > num2 ? num1 : num2;

// console.log(`El numero mayor es ${resultado}`);

let numero1 = 10;
let numero2 = 8;
let numero3 = 11;

if (numero1 > numero2 && numero1 > numero3) {
  console.log(`${numero1} es el mayor`); // signo +
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(`${numero2} es el mayor`);
} else {
  console.log(`${numero3} es el mayor`);
}

// Ejercicio 3:
// Realizar un programa que tome dos datos, el primero un número y el
// segundo el cuadrado de este. Si es correcto el script enviará un mensjaje de
// acierto en caso contrario dirá que se produjo un error.
// Usar operador ternario.

let numero = 10; // 2
let cuadrado = numero ** numero; // 4

const mensaje =
  cuadrado === numero ** 2 ? console.log("Acierto") : console.log("Error");
//   4     ===      4
//         true
