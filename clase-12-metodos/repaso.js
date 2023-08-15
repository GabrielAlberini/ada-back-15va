// método -> función que modifica o usa los datos

// console.log("Hola")

const persona = {
  name: "Gabriel",
  age: 29,
  speak: function() {
    // console.log("Hola soy " + this.name)
  }
}

// persona.speak()

// datos primitivos -> string, number, null, undefined, etc...
// datos complejos -> array, objetos

// array -> pop, shift, push, unshift, slice, splice, length
// string -> length, toUpperCase, toLocalLowerCase, parseFloat, parseInt
// number -> toFixed -> lo convierte a string

// let num = 123.3435345345

// console.log(typeof parseFloat(num.toFixed(2)))

// console.log(parseInt("123"))

// console.log(parseInt("12334"))

// console.log("hola")

//Retorno de función
const retornoDeValor = (num) => {
  return `El numero pasado por parametros es: ${num}`
}

let resultado = retornoDeValor(4)

// console.log(resultado)

