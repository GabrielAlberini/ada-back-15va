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

// const clientsData = [
//   {
//     name: "John",
//     lastname: "Doe",
//     balance: 3659885,
//     userID: "AGV-9654-$%&"
//   },
//   {
//     name: "María",
//     lastname: "Cuevas",
//     balance: 123659881315,
//     userID: "PL0-5668-$%&"
//   },
//   {
//     name: "Mata",
//     lastname: "Hari",
//     balance: 390989659885,
//     userID: "KIL-6667-$%&"
//   }
// ];

const clientsData = [];

function generateRandomString(characters, length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

function getPassword() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '-$%&';

  const firstPart = generateRandomString(uppercaseLetters, 3);
  const secondPart = generateRandomString(numbers, 4);
  const thirdPart = generateRandomString(specialChars, 3);

  return `${firstPart}-${secondPart}-${thirdPart}`;
}

function addClient(name, lastname, balance) {
  const userID = getPassword();
  const newClient = {
    name,
    lastname,
    balance,
    userID
  };
  clientsData.push(newClient);
}

// function getClientByID(userID) {
//   return clientsData.find(client => client.userID === userID);
// }

function displayClients() {
  clientsData.forEach(client => {
    console.log(`Name: ${client.name} ${client.lastname} | Balance: $${client.balance} | UserID: ${client.userID}`);
  });
}

// Ejemplo de cómo usar las funciones
addClient("Jane", "Smith", 500000);
addClient("Gabriel", "Alberini", 500000);
displayClients();
