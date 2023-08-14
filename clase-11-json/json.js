const products = [
  {
    name: "zapatilla",
    price: 45945
  }
]

let objetToJson = JSON.stringify(products)
console.log(typeof objetToJson)


// let jsonToObject = JSON.parse(objetToJson)
// console.log(jsonToObject[0].name)

// Dado un array o un objeto mediante una función convertir a json

const object = [{
  name: "gabriel",
  age: 29
}]

// declaración -> lógico
const objectToJson = (data) => {
  let json = JSON.stringify(data)
  return json
}

// invocación -> paso de datos reales
let json = objectToJson(object)
console.log(json, "<--aca")



const jsonToObject = (data) => {
  let object = JSON.parse(data)
  return object
}

console.log(jsonToObject(json))