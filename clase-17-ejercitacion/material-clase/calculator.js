// Desarollar una calculadora que permita realizar los cálculos básicos: suma, resta, multiplicación, división, potencia, area y perimetro del triángulo, cuadrado, pentagono regular y del circulo.
// La app debe estar modularizada.
// index.js recibe parámetros desde la terminal, los procesa, y deriva los cálculos a calculator.js
//calculator.js tiene exportadas las funciones necesarias para hacer los cálculos

// El usuario debe poder ingresar en la terminal:

// node index.js --add 10 250         -> 260
// node index.js --subtract 10 5      -> 5
// node index.js --multiply 4 4       -> 16
// node index.js --divide 10 2        -> 5 (devuelve solo 6 digitos despues de la coma)
// node index.js --pow 2 8            -> 256 (base, exponente)
// node index.js --area tri 10 5      -> 7,5 (base, altura)
// node index.js --per tri 10 24 5    -> 39 (lados)
// node index.js --area sqr 20        -> 400 (lado)
// node index.js --per sqr 20         -> 80 (lado)
// node index.js --area pen 12        -> 247,68 (lado)
// node index.js --per pen 12         -> 60 (lado)
// node index.js --area cir 10        -> 314 (radio)
// node index.js --per cir 10         -> 62,83 (radio)

const args = process.argv.splice(2)

const area = (type = "", num1 = 0, num2 = 0) => {
  const n1 = Number(num1)
  const n2 = Number(num2)
  let result
  
  switch(type) {
    case "tri":
      result = (n1 * n2) / 2
    break
    case "sqr":
      result = n1 ** 2
    break
  }

  return result
}

console.log(args)

console.log(area(args[1], args[2], args[3]))
