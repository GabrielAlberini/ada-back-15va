// Crear un programa que mediante un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y 2 persona(s) más están conectadas

// const usuariasConectadas = ["Tatiana"]; // Tatiana esta conectada.
// const usuariasConectadas = ["Tatiana", "Carolina"]; // Tatiana y Carolina están conectadas.
// const usuarias = ["Tatiana", "Carolina", "Daniela", "Magali", "Luisa"] // Tatiana, Carolina y 3 personas(s) están conectadas.

// const usuariasConectadas = ["Tatiana", "Carolina", "Daniela", "Carolina", "Daniela"]
// let mensaje = "";

// const cantidadDeConectadas = usuariasConectadas.length; // 1

// if (cantidadDeConectadas === 1) {
//   mensaje = usuariasConectadas[0] + " esta conectada."; // reasignando
// } else if (cantidadDeConectadas === 2) {
//   mensaje = usuariasConectadas[0] + " y " + usuariasConectadas[1] + " estan conectadas.";
// } else if(cantidadDeConectadas >= 3) {
//   const alumnasRestantes = usuariasConectadas.length - 2 
  
//   if(alumnasRestantes > 1) {
//     mensaje = `${usuariasConectadas[0]}, ${usuariasConectadas[1]} y ${alumnasRestantes} personas(s) están conectadas`
//   } else {
//     mensaje = `${usuariasConectadas[0]}, ${usuariasConectadas[1]} y una persona está conectada`
//   }
// }

// console.log(mensaje)


//EJERCICIO 1:

// Crear un programa que mediante un array de frutas (🍎, 🍐y 🍑 ) devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑

//Recordar como mutar un array (modificar) - Métodos

//EJERCICIO 2:

// Analizar un array de 5 emojis y determinar si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si no lo son, mostrar un mensaje indicando que se ha perdido. Si se ingresan más de 5 emojis sólo deben evaluar los primeros 5. Ejemplo:

// Emojis: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Emojis: 💫💫💫💫💫💫💫
// ¡Felicitaciones! Has ganado

// CONSEJO: Investigar como cortar un array. 

//EJERCICIO 3: 

// Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Guardar en una variable cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
// Cuántas bananas come un mono?: 2
// ¡Oh no!¡No hay suficientes bananas para los monos! 😭

// CONSEJO: Utilizar operador aritmetico de resto (%)

//------------------------------------------

//CONSEJO GLOBAL: En todos los ejercicios hay que crear nuevos arrays.


// Crear un programa que mediante un array de frutas (🍎, 🍐y 🍑 ) devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑

// input -> datos que usamos
// const arrayDeFrutas = ["M", "M", "P" , "D" ,"M" ,"D","D"]; // para acceder al dato hay que indicarle la posición
// let manzanas = [];
// let peras = [];
// let duraznos = [];
// let mensaje = "";

// //                          7
// for (let i = 0; i < arrayDeFrutas.length; i++) {
//   // console.log(`En la posicioón ${i} hay una ${arrayDeFrutas[i]}`)
  
//   //       M es estrictamente igual a M? = true
//   if(arrayDeFrutas[i] === "M") {
//     manzanas.push("M")
//   } else if (arrayDeFrutas[i] === "P"){
//     peras.push("P")
//   } else {
//     duraznos.push("D")
//   }
// }

// console.log(peras)

// mensaje = `Tienes ${manzanas} 🍎 ${peras} 🍐 y ${duraznos} 🍑.`

//EJERCICIO 3: 

// Crear un programa que a partir de una lista de 🐵(monos) y 🍌(bananas). Guardar en una variable cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// Ingresar monos y bananas: ["mono", "banana"]
// Cada mono come 1 banana
// ¡Oh no!¡No hay suficientes bananas para los monos! 😭
// ¡Oh si! Hay suficioentes bananas para los monos :D

// CONSEJO: Utilizar operador aritmetico de resto (%)

const monosYBananas = ["mono", "banana", "banana", "mono", "mono", "banana","banana","banana","banana"] // para acceder al dato hay que indicarle la posición
let monos = 0 // 2
let bananas = 0 // 2
let bananaParaCadaMono = 2
let mensaje = ""

// fragmento de código que se repite
// indice -> dato que tenemos a disposición dentro del bucle

//Saber cuantos monos y bananas hay en el array monosYBananas
for(let i = 0; i < monosYBananas.length; i++) { 
  if(monosYBananas[i] === "mono"){
    monos += 1
  } else {
    bananas += 1
  }
}

// Verificar si hay suficientes bananas para los monos
if (bananas >= monos * bananaParaCadaMono) {
  mensaje = "¡Oh si! Hay suficientes bananas para los monos :D";
} else {
  mensaje = "¡Oh no! ¡No hay suficientes bananas para los monos! 😭";
}

// Mostrar el resultado
console.log(`Cada mono come ${bananaParaCadaMono} banana(s)`);
console.log(mensaje);












// if(bananasFaltantes === true) {
//   console.log("¡Oh si! Hay suficioentes bananas para los monos :D")
// } else {
//   console.log("¡Oh no!¡No hay suficientes bananas para los monos! 😭")
// }