// Dado un número entero, imprimir todos los números en orden ascendente hasta el
// numero dado. Es decir, si el número es 10, se deberá comenzar desde 1 hasta el 10.
// Inclusive puede ser desde 0.

// input
// let num = 2;

// // procesamiento
// for (let i = 0; i <= num; i++) {
//   // i = i + 1
//   // scope (alcance)
//   // output
//   if (i > 0) {
//     console.log(i);
//   }
// }

// Dado un número entero, imprimir todos los números en orden descendente hasta el
// numero dado. Es decir, si el número es 10, se deberá comenzar desde 10 hasta el 1.
// Inclusive hasta el 0.

// let numeroInicial = 10;

// for (let i = numeroInicial; i >= 0; i -= 1) {
//   console.log(i);
// }

// Dado un array de 18 números, imprimir la suma de todos su elementos.
// Ej: const array = [1,2,3] // 6 <- output

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19];
// let contador = 0; // undefined + number = NaN -> not a number

// for (let i = 0; i < array.length; i++) {
//   contador += array[i];
// }

// console.log(`La suma de los elementos del array es: ${contador}`);

// Dado un array de palabras, imprimir en consola, la cantidad de palabras que hay en el
// array.

// input
// const cartuchera = ["lapiz", "sacapunta", "borrador", "lapices de colores"];
// let cantidadDePalabras = 0;

// for (let i = 0; i < cartuchera.length; i++) {
//   cantidadDePalabras += 1;
// }

// console.log(`El array tiene ${cantidadDePalabras} elementos.`);

// Dado un array de palabras imprimir en consola un mensaje que sea el siguiente:
// - En la 0 posición se encuentra la palabra "cartuchera"
// - en la 1 posición se encuentra la palabra "lapiz"
// Asi sucesivamente hasta mostrar todas las palabras que contenga el array. Debe ser
// dinámico para que en caso de que haya más palabras en el array siempre, estas tambien
// se muestren en la consola. Para indicar la posición en la consola, usar el índice del bucle.

// const cartuchera = ["lapiz", "sacapunta", "borrador", "lapices de colores"];

// for (let i = 0; i < cartuchera.length; i++) {
//   console.log(`El ${i + 1}° elemento es ${cartuchera[i]}`); // El 1° elemento es lapiz
// }

// Dado un array de 9 numeros, imprimir en consola un true para todos los
// números pares.

// const array = [2, 3, 20, 5, 8, 9];

// for (let i = 0; i < array.length; i++) {
//   // un bucle es un fragmento de código que se ejecuta mientras la condición sea true

//   // condicion ? si es true ejecuta esto : si es false ejecuta todo esto
//   array[i] % 2 === 0
//     ? console.log(`En la posición ${i} se encuentra el número ${array[i]} y es un numero par: ${true}`)
//     : console.log(`En la posición ${i} se encuentra el número ${array[i]} y es un numero impar: ${false}`);
// }

//Desarrollar un algoritmo que dibuje en la consola un triángulo hecho con "#", cuya base sea de la longitud indicada por un valor asignado a una variable, Por ejemplo, si esa variable es 6, entonces en la consola se tienen que imprimir las siguientes lineas

// #
// ##
// ###
// ####
// #####
// ######

// let base = 6;
// let signo = "";

// console.log(typeof signo)

// for (let i = 1; i <= base; i++) {
//   console.log(signo += "#")
// }

// Dado un array de números, imprimir la suma de los números en el array que son mayores que el promedio del array

// Objetivo: Sumar los números que son mayores que el promedio de los números del array
// 1 - Sacar el promedio -> suma de los números / cantidad de números
// 2 - Sumar los números mayores al promedio

// input -> proceso -> output

// const array = [1, 23, 567, 12, 34, 0]; // en los datos complejos se accede al DATO mediante la posición
// let promedio = 0;
// let sumaDeNumerosDelArray = 0;
// let sumaDeNumerosMayoresAPromedio = 0;

// // Paso 1: suma de los números del array
// for (let i = 0; i < array.length; i++) {
//   sumaDeNumerosDelArray += array[i];
// }

// // Paso 2: Redondear mediante el método tofixed y convirtiendo el dato en number mediante la función Number()
// promedio = Number((sumaDeNumerosDelArray / array.length).toFixed(0)); // 165,22222222222 -> 165
// console.log(promedio);

// // Paso 3: Sumar todos los números mayores al promedio
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > promedio) {
//     sumaDeNumerosMayoresAPromedio += array[i];
//   }
// }

// // Mostrar la suma de los números mayores al promedio
// console.log(sumaDeNumerosMayoresAPromedio);

// Dado un array de números, imprimir todos los números que son mayores que el número anterior en la lista.

// let numeros = [10, 11, 1, 22, 44];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > numeros[i - 1]) {
//     console.log(numeros[i], "<-- aca");
//   }
// }

// Crear un programa que con un string de letras devuelva un string con las letras en orden como muestra el ejemplo:

//let string = "LLLALLLALALALALA" --> "LLLLLLLLLAAAAAA"

// let stringDeLetras = "LLLALDFGSDLLALALALALA";
// let A = "";
// let L = "";

// for (let i = 0; i < stringDeLetras.length; i++) {
//   let letra = stringDeLetras[i];

//   if (letra === "A") {
//     A += letra;
//   }

//   if (letra === "L") {
//     L += letra;
//   }
// }
// console.log(`${A}${L}`);
// console.log(A + L);

// Crear un programa que mediante un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas

// const usuariasConectadas = ["Paz", "Mar"]; // Tatiana esta conectada.
const usuariasConectadas = ["Tatiana", "Carolina", "Tatiana", "Tatiana"]; // Tatiana y Carolina están conectadas.
// const usuarias = ["Tatiana", "Carolina", "Daniela", "Magali", "Luisa"] // Tatiana, Carolina y 3 personas(s) están conectadas.

let mensaje = "";

const cantidadDeConectadas = usuariasConectadas.length;

if (cantidadDeConectadas === 1) {
  mensaje = usuariasConectadas[0] + " esta conectada.";
} else if (cantidadDeConectadas === 2) {
  mensaje = usuariasConectadas[0] + " y " + usuariasConectadas[1] + " estan conectadas.";
} else {
  let alumnasFinales = 0;

  for (let i = 0; i < usuariasConectadas.length; i++) {
    alumnasFinales = usuariasConectadas.length - 2;
  }
  
  if(alumnasFinales > 1) {
    mensaje = `${usuariasConectadas[0]}, ${usuariasConectadas[1]} y ${alumnasFinales} personas(s) están conectadas.`
  } else {
    mensaje = `${usuariasConectadas[0]}, ${usuariasConectadas[1]} y 1 persona está conectada.`
  }
}

// console.log(mensaje);


// Crear un programa que mediante un array de frutas (🍎, 🍐y 🍑 ) devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑

const frutas = ["🍎","🍎","🍐","🍑","🍎","🍑"]
let manzana = []
let pera = []
let durazno = []

for (let i = 0; i < frutas.length; i++) {
  if(frutas[i] === "🍎") {
    manzana.push(frutas[i])
  } else if(frutas[i] === "🍐") {
    pera.push(frutas[i])
  } else if(frutas[i] === "🍑") {
    durazno.push(frutas[i])
  }
}

mensaje = `Hay ${manzana.length} 🍎, ${pera.length} 🍐 y ${durazno.length} 🍑`

console.log(mensaje)

// Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
// Cuántas bananas come un mono?: 2
// ¡Oh no!¡No hay suficientes bananas para los monos! 😭

// const bananasYMonos = ["🐵", "🍌","🐵", "🍌","🐵", "🍌", "🍌", "🍌", "🍌"]
// const bananasPorMono = 2
// let monos = []
// let bananas = [] 

// for (let i = 0; i < bananasYMonos.length; i++) {
//   if(bananasYMonos[i] === "🐵") {
//     monos.push(bananasYMonos[i])
//   } else if(bananasYMonos[i] === "🍌") {
//     bananas.push(bananasYMonos[i])
//   } 
// }

// console.log(bananas, monos)

// let bananasFaltantes = monos.length % bananas.length === 0

// console.log(bananasFaltantes)

// if(bananasFaltantes){ 
//   console.log("¡Oh no!¡No hay suficientes bananas para los monos! 😭")
// } else {
//   console.log("¡Hay suficientes bananas para los monos! :D")
// }

// Analizar un array de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// Ingrese símbolos: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Ingrese símbolos: 💫💫💫💫💫
// ¡Felicitaciones! Has ganado

let array = ["⭐️", "⭐️", "⭐️", "⭐️", "💫", "💫"]

const arrayCortada = array.slice(0,5)
let areEqual = true;
let message;

// Verificar si todos los símbolos son iguales
for (let i = 1; i < arrayCortada.length; i++) {
  if (arrayCortada[i] !== arrayCortada[0]) {
    areEqual = false;
  }
}

// Mostrar el resultado
if (areEqual) {
  message = ("¡Felicitaciones! Has ganado");
} else {
  message = ("¡Has perdido! Inténtalo nuevamente");
}

console.log(message)