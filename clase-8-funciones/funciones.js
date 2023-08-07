// funciones -> acción -> siempre tienen un plan en concreto

let nombre = "Ailen"
let comida = "turrón"

// console.log(`${nombre} está comiento un ${comida}.`)

// 1 - declaración
// 2 - invocación

let array = []
//los métodos son funciones es decir -> realizan una acción sobre X dato
array.slice(0,1)

// Declarando la función -> Escucha compu, guardo en tu memoria RAM esta acción
function comer(){
  // console.log("Hola estoy comiendo")
}

// Invocar una función -> es sinónimo a ejecutarla
// comer()

// Declaración -> parametro = una variable de uso interno
function saludar(nombre = "Ndesconocido", apellido = "Adesconocido") {
  console.log(`Hola ${nombre} ${apellido}`)
}

// invocación -> argumento
saludar()
saludar("Carolina", "Sordini")

console.log("Hola")
console.log("Chau")

// valores por defecto en parametro
function multiplicar(num1 = 0, num2 = 0) {
  
}

// argumento
multiplicar(10000)


// Las funciones pueden devolver un valor -> sacar al exterior
// function sumar(num1, num2) {
//   let resultado = num1 + num2
//   return resultado
// }

// let retornoDeFuncion = sumar(1,2)

// console.log(retornoDeFuncion)

// Crear un programa que tenga 2 funciones:
// - La primera tiene que unir en un string un nombre completo a partir del nombre y del apellido
// - La segunda función tiene que retornar un mensaje que diga: Hola, como estas ${nombreCompleto}

function crearNombreCompleto(nombre, apellido){
  let nombreCompleto = nombre + " " + apellido
  return nombreCompleto
}

function saludarConNombre(nombreCompleto){
  let saludo = "Hola como estas? " + nombreCompleto
  console.log(saludo)
}

saludarConNombre(crearNombreCompleto("Gabriel", "Alberini"))











// Invocar -> usar
// let nombreCompleto = crearNombreCompleto("Daniela", "Loponte")
// console.log(nombreCompleto)