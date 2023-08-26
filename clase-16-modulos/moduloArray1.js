const numbers = [[1,2,3,4], [5,6,7,8], [9,0]]

// Crear una funcion que pida dos valores y retorne un número

const getNumber = (position1, position2) => {
  return numbers[position1][position2]
}

const sumNumbers = (a, b, c, d) => {
  let num1 = getNumber(a, b)
  let num2 = getNumber(c, d)
  return num1 + num2
}

exports.getNumber = getNumber
exports.sumNumbers = sumNumbers
