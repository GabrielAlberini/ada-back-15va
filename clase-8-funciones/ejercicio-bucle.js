// Crear un programa que a partir de una lista de 🐵(monos) y 🍌(bananas). Guardar en una variable cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// string de datos: ["mono", "banana"]
// Cada mono come 1 banana
// ¡Oh no!¡No hay suficientes bananas para los monos! 😭
// ¡Oh si! Hay suficioentes bananas para los monos :D

// const monosYBananas = ["mono", "banana", "banana"] // para acceder al dato hay que indicarle la posición
// let monos = 0 
// let bananas = 0 
// let bananaParaCadaMono = 2
// let mensaje = ""
// let bananasFaltantes = 0

// // fragmento de código que se repite
// // indice -> dato que tenemos a disposición dentro del bucle

// //Saber cuantos monos y bananas hay en el array monosYBananas
// for(let i = 0; i < monosYBananas.length; i++) { 
//   if(monosYBananas[i] === "mono"){
//     monos += 1
//   } else {
//     bananas += 1
//   }
// }

// // Verificar si hay suficientes bananas para los monos
// if(bananas >= monos * bananaParaCadaMono){
//   mensaje = "¡Oh si! Hay suficientes bananas para los monos :D"
// } else {
//   let bananasQueNecesito = monos * bananaParaCadaMono
//   bananasFaltantes = bananasQueNecesito - bananas
//   mensaje = "¡Oh no! ¡No hay suficientes bananas para los monos! 😭"
// }

// //Mostrar resultado
// console.log(`Cada mono come ${bananaParaCadaMono} bananas(s)`)
// console.log(`Hay ${monos} monos`)
// console.log(`Hay ${bananas} bananas`)
// console.log(mensaje)

// if(bananasFaltantes) {
//   console.log(`Faltan ${bananasFaltantes} :( `)
// }

// Analizar un array de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// Ingrese símbolos: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Ingrese símbolos: 💫💫💫💫💫
// ¡Felicitaciones! Has ganado

// let emojis = ["⭐️", "💫", "⭐️", "⭐️", "⭐️", "💫"]

// // Métodos -> acciones que mutan el array
// // parametros -> datos para que una función use de forma interna
// let emojisMutado = emojis.slice(0, 5)
// let mensaje = ""

// for (let i = 1; i < emojisMutado.length; i++) {

//   //"💫" !== "⭐️"? = true
//   if(emojisMutado[i] !== emojisMutado[0]) {
//     mensaje = "El array tiene todos los elementos iguales"
//   } else {
//     mensaje = "El array tiene elementos distinos"
//   }
// }

// console.log(mensaje)