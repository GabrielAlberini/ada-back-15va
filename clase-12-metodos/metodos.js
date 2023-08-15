const arr = [1,23,4,5,6,7,8, 11]

// Retorna la cantidad de elementos que tiene el array.
// console.log(arr.length)

// Retorna una cadena de caracteres representando al array y sus elementos
// console.log(arr.toString())

// Retorna una cadena con todos los elementos del array separados por "separador"
// console.log(arr.join(", "))

// Retorna true si "ítem" se encuentra dentro del array, false en caso contrario
// let validarDato = arr.includes(4)
// console.log(validarDato)

// Ejecuta la función "función" para cada elemento del array. "función" recibe tres argumentos que referencian al valor actual, el índice del elemento actual siendo procesado y el array.
arr.forEach((numero, indice, array) => {
  // console.log(`En la posición ${indice} se encuentra el elemnto: ${numero}. Este dato esta dentro del array [${array}]`)
  if(numero > 10) {
    // console.log(numero)
  }
})

// map -> retorna un nuevo array con la modificación de sus elementos
const datos = ["ailen", "annaly", "carolina"]

// const resultado = [
//   {
//     indice: 0,
//     dato: 1
//   }, 
//   {
//     indice: 1,
//     dato: 2
//   },
//   {
//     indice: 2,
//     dato: 3
//   }
// ]

const resultado = datos.map((nombre, i, arr) => {
    return [i, nombre]
})

console.log(datos)
console.log(resultado)

// Retorna un nuevo array cuyo contenido es una copia del array original empezando desde "inicio" hasta "fin", sin incluir "fin". Este método no modifica el array original.

const nombres = ["juan", "pepito", "maría", "rosa"]
// slice -> desde que posicion hasta que posicion sin inluir a esta ultima
let slice = nombres.slice(1, 2)

// splice -> desde que posición y cuantos elementos queres borrar
let splice = nombres.splice(0,1)

// console.log(nombres)
// console.log(slice)
// console.log(splice)

// sort -> ordedenar alfabeticamente
const alumnas = ["Rosario", "Ailen", "Annaly", "Carolina", "rosario"]
const alumnasOrdenadas = alumnas.sort()
// console.log(alumnasOrdenadas)

// find -> Retorna el valor del primer elemento que cumple con la condición establecida con en la función.
const vocales = ["a", "e", "i", "o", "u"]

const mascotas = [
  {
    nombre: "pepe",
    raza: "salchicha"
  },
  {
    nombre: "julito",
    raza: "boxer"
  }
]

const mascotaEncontrada = mascotas.find((mascota) => {
  if(mascota.nombre === "julito") {
    return mascota
  }
})

// console.log(mascotaEncontrada)

// filter -> Retorna un nuevo array con todos los elementos que cumplen con la condición establecida con "función", que recibe tres argumentos que referencian al valor actual, el índice del elemento actual siendo procesado, y el array.

const frutas = ["manzana", "naranja", "banana", "mandarina", "melón", "sandía"]

const frutasFiltradas = frutas.filter(fruta => {
  if(fruta[0] === "m") {
    return fruta
  }
})

// console.log(frutasFiltradas)

// -------------------------------------------------------------------------

// MÉTODOS PARA OBJETOS

// propiedades -> key (clave), values (valores)
const persona = {
  nombre: "Gabiel",
  edad: 29
}

// keys -> retorna un array con las claves de las propiedades de un objeto
console.log(Object.keys(persona), "<-- claves")

// values -> retorna un array con los valores de las propiedades de un objeto
console.log(Object.values(persona), "<-- valores")

// entries -> retorna un array con las propiedades de un objeto
console.log(Object.entries(persona), "<-- propiedades")