// - client.js
// Cumple el rol de index.js. Recibe todas las solicitudes del usuario, verifica que respeten la estructura establecida por ustedes, y las deriva al server. En este proyecto, el controlador está compuesto por server.js y controller.js.

// MÓDULO CLIENTE
import net from "node:net";
import readline from "readline-sync";

const OPTIONS = {
  port: 7203,
  host: "127.0.0.1",
};

const clientTCP = net.createConnection(OPTIONS);

const sendMessage = () => {
  let clientMsg = readline.question("CLIENT --> ");
  const arrayClientMsg = clientMsg.split(" ");
  // [ '--createNewUser', 'name', 'gabriel', 'password', 'test123' ]

  while (clientMsg.startsWith("--createNewUser")) {
    const iDeName = arrayClientMsg.indexOf("name"); // 1
    const iDePass = arrayClientMsg.indexOf("password"); // 3

    if (iDeName < 0) {
      console.log("Debes incluir el argumento name en los parametros");
    } else {
      console.log(arrayClientMsg[iDeName + 1]);
    }

    if (iDePass < 0) {
      console.log("Debes incluir el argumento password en los parametros");
    } else {
      console.log(arrayClientMsg[iDePass + 1]);
    }

    clientTCP.write(clientMsg);

    clientMsg = readline.question("CLIENT --> ");
  }
  while (clientMsg === "--login") {
    console.log("Designar método para loguearse");
    clientMsg = readline.question("CLIENT --> ");
  }
  while (clientMsg === "--getUsers") {
    console.log("Desingar método para obtener todos los usuarios");
    clientMsg = readline.question("CLIENT --> ");
  }
  while (clientMsg === "--getUserInfo") {
    console.log("Designar método para obtener información de un usuario");
    clientMsg = readline.question("CLIENT --> ");
  }
  while (clientMsg === "--deleteUser") {
    console.log("Designar método para borrar un usuario");
    clientMsg = readline.question("CLIENT --> ");
  }

  sendMessage();
};

clientTCP.on("connect", () => {
  console.log("Connection successful!");
  sendMessage();
});

clientTCP.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  console.log("SERVER -->", serverMsg);
  sendMessage();
});

clientTCP.on("error", (err) => console.log(err));
