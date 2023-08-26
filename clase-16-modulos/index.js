// Modularización -> dividir en fragmentos
const operaciones = require("./calculadora.js")
const methodsArray = require("./moduloArray2.js")

const main = () => {
  // console.log(operaciones)
  // console.log(operaciones.sumar(1,2))
  // console.log(operaciones.restar(1,2))
  // console.log(operaciones.dividir(1,2))
  // console.log(operaciones.multiplicar(1,2))
  console.log(methodsArray)

  console.log(methodsArray.getNumber(2,1))
  console.log(methodsArray.sumNumbers(0,1,0,2))

}

main()