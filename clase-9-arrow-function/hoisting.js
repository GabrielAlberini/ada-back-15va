// hosting !== hoisting
// hoisting = en la etapa de ejecución javascript eleva las funciones arriba de todo


// console.log(sumar1(1, 2))

function sumar1(n1, n2) {
  return n1 + n2
}

function restar1(n1, n2) {
  return n1 - n2
}

// sintaxis de arrow function -> () => {} -> "con aquello hago esto"


// return explicito -> es valido cuando hay UNA sola linea de código en el scope
const sumar2 = (n1, n2) => n1 + n2

// sin return explicito
const sumar3 = (n1, n2) => {
  let numerosPasadosComoArgs = `Número 1: ${n1}. Número 2: ${n2}`
  console.log(numerosPasadosComoArgs)
  return n1+n2
}
console.log(sumar3(10,49234))

// si uso un parametro puedo omitir los parentesis
const saludar = nombre => `Hola ${nombre}, como estas?`
console.log(saludar("Rosario"))

