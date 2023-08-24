// HSBC está necesitando ordenar su registro detallado del estado de las cuentas de sus clientes. Para este trabajo,les pidio una solución de software a las desarrolladoras más capacitadas de ADA. El objetivo es presentar la información de la siguiente manera.
[
  {
    name: "John",
    lastname: "Doe",
    balance: 3659885,
    userID: "AGV-9654-$%&"
  },
  {
    name: "María",
    lastname: "Cuevas",
    balance: 123659881315,
    userID: "PL0-5668-$%&"
  },
  {
    name: "Mata",
    lastname: "Hari",
    balance: 390989659885,
    userID: "KIL-6667-$%&"
  }
]

// CONDICIONES

// Desarrollar el progama utilizando funciones. Cada una debe cumplir una tarea en específico. 
// Ningún código debe quedar por fuera de las funciones.
// El código final debe contar con la creación de un objeto mediante una función, al mismo se le pasaron los datos internos de cada usuario, es decir: name, lastname, balance, user id
// La collection final debe ser como la del ejemplo. Los datos pueden ser lo que se compartieron pero el ID debe ser construido de la siguiente forma.
// Desarrollar una función getPassword(), que crea un ID automáticamente. El ID es un string formado por tres campos: el primero tiene tres letras mayúsculas, el segundo 4 numeros, y el último tres carácteres especiales, cada campo separado por guiones.

const collection = [];

const generateRandomFragment = (type, length) => {
  let fragment = ""
  
  for ( let i = 0; i < length; i++ ) {
    fragment += type.charAt(Math.floor(Math.random() * type.length));
  }

  return fragment
}

const generateIdRandom = () => {
  const types = {
    string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    caracters: '!@#$%^&*()'
  }

  let strings = generateRandomFragment(types.string, 3)
  let numbers = generateRandomFragment(types.numbers, 4)
  let caracters = generateRandomFragment(types.caracters, 3)

  return `${strings}-${numbers}-${caracters}`
}

const createObject = (name, lastname, balance) => {
  const userID = generateIdRandom()

  const newObject = {
    name,
    lastname,
    balance,
    userID 
  }

  return newObject
} 

// Spread operator
const pushToCollection = (...objects) => {
  objects.forEach(obj => {
    collection.push(obj)
  })
} 

const main = () => {
const object1 = createObject("john", "Doe", 3659885)
const object2 = createObject("Carolina", "Sordini", 3485460)
const object3 = createObject("Tatiana", "Vega", 6844688) 

pushToCollection(object1, object2, object3)
console.log(collection)
}

main()