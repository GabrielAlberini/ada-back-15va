// 1 - declarar variables
// 2 - declarar funciones 
// 3 - invocar funciones

// Desarollar una calculadora que permita realizar los cálculos básicos: suma, resta, multiplicación, división, potencia, area y perimetro del triángulo, cuadrado, rectángulo, pentagono regular y del circulo.
// La app debe estar modularizada.
// index.js recibe parámetros desde la terminal, los procesa, y deriva los cálculos a calculator.js
// calculator.js tiene exportadas todas las funciones necesarias para hacer los cálculos

// El usuario debe poder ingresar en la terminal:

// node index.js --add 10 250         -> 260
// node index.js --subtract 10 5      -> 5
// node index.js --multiply 4 4       -> 16
// node index.js --divide 10 2        -> 5 (devuelve solo 6 digitos despues de la coma)
// node index.js --pow 2 8            -> 256 (base, exponente)
// node index.js --area tri 10 5      -> 7,5 (base, altura)
// node index.js --area sqr 20        -> 400 (lado)
// node index.js --area pen 12        -> 247,68 (lado)
// node index.js --area cir 10        -> 314 (radio)
// node index.js --per tri 10 24 5    -> 39 (lados)
// node index.js --per sqr 20         -> 80 (lado)
// node index.js --per pen 12         -> 60 (lado)
// node index.js --per cir 10         -> 62,83 (radio)

exports.add = (n1, n2) => {
  console.log(n1, n2)
  return n1 + n2
}

exports.subtract = (n1, n2) => {
  return n1 - n2
}

exports.multiply = (n1, n2) => {
  return n1 * n2
}

exports.divide = (n1, n2) => {
 return n1 / n2
}

exports.pow = (bs, exp) => {
  return bs ** exp
}

exports.per = (type, data) => {
  let result = 0
  switch(type) {
    case "sqr":
      result = data * 4
    break
    case "pen":
      result = data * 5
    break
    case "cir":
      result = Number((2 * Math.PI * data).toFixed(3))
    break
    case "tri":
      data.forEach((num) => {
        result += Number(num)
      })
    break
  }

  return result
}

exports.area = (type, data) => {
  let restult = 0
  switch(type) {
    case "pen":
      restult = Number(((5 / 4) * Math.pow(data, 2) / Math.tan(Math.PI / 5))).toFixed(3)
    break
    case "cir": 
      restult = Math.PI * data ** 2
    break
    case "sqr":
      restult = data ** 2
    break
    case "tri":
      restult = data[0] * data[1] / 2
    break
  }
  return restult
}