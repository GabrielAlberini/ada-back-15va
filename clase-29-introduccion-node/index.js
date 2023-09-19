// const { v4: uuidv4 } = require('uuid'); // Common Js
import { v4 as uuidv4 } from "uuid" // ES modules

const user = {
  id: uuidv4(),
  name: "Gabriel",
  lastname: "Alberini"
}

// npm -> node package manager -> manejador de paquetes (módulos) de node

// Crear dinámicamente una collection cuyos objetos sean como el siguiente:
/*
{
  name: "Tomas",
  lastname: "Anderson",
  id: "Genarado con UUID"
}
*/

const data = [
  "Thomas",
  "Anderson",
  "Juana",
  "Dearco",
  "Juana",
  "La Papisa",
  "Ricardo",
  "Corazón de Leon",
];

const createNewUser = (name, lastname, id) => {
  return {
    name,
    lastname,
    id
  }
}

const createUserCollection = () => {
  const collection = []

  for(let i = 0; i < data.length; i = i + 2) {
    const name = data[i]
    const lastname = data[i + 1]
    const id = uuidv4()
    const newUser = createNewUser(name, lastname, id)
    collection.push(newUser)
  }

  return collection
}

const main = () => {
  const listOfUsers = createUserCollection()
  console.log(listOfUsers)
}

main()