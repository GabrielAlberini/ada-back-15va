// - client.js
// Cumple el rol de index.js. Recibe todas las solicitudes del usuario, verifica que respeten la estructura establecida por ustedes, y las deriva al server. En este proyecto, el controlador está compuesto por server.js y controller.js.

// MÓDULO CLIENTE
import net from "node:net";
import readline from "readline-sync";

const OPTIONS = {
  port: 7204,
  host: "127.0.0.1",
};

const clientTCP = net.createConnection(OPTIONS);

const sendMessage = () => {
  let clientMsg = readline.question("CLIENT --> ");
  const arrayClientMsg = clientMsg.split(" "); // split() ->  convierte un string a array, le tengo que pasar por () con QUE lo quiero separar.

  while (clientMsg.startsWith("--getUsers")) {
    if (arrayClientMsg.length === 1) {
      clientTCP.write(clientMsg);
      return;
    }
    clientMsg = readline.question("CLIENT --> ");
  }

  while (clientMsg.startsWith("--createNewUser")) {
    // VALIDACIONES
    const iDeName = arrayClientMsg.indexOf("name"); // 1
    const iDePass = arrayClientMsg.indexOf("password"); // 3

    if (iDeName !== -1 && iDePass !== -1) {
      const isNameOk = arrayClientMsg[iDeName + 1] !== "password"; // true o un false
      const isPassOk = arrayClientMsg[iDePass + 1] !== undefined;
      if (isNameOk && isPassOk) {
        clientTCP.write(clientMsg);
        return;
      }
    }
    clientMsg = readline.question("CLIENT --> ");
  }

  while (clientMsg.startsWith("--login")) {
    const iDeName = arrayClientMsg.indexOf("name"); // 1
    const iDePass = arrayClientMsg.indexOf("password"); // 3

    if (iDeName !== -1 && iDePass !== -1) {
      const isNameOk = arrayClientMsg[iDeName + 1] !== "password"; // true o un false
      const isPassOk = arrayClientMsg[iDePass + 1] !== undefined;
      if (isNameOk && isPassOk) {
        clientTCP.write(clientMsg);
        return;
      }
    }
    clientMsg = readline.question("CLIENT --> ");
  }

  // --getUserInfo id -> ["--getUserInfo", "id"]
  while (clientMsg.startsWith("--getUserInfo")) {
    const iDeId = arrayClientMsg.indexOf("id"); // 1

    if (iDeId !== -1) {
      const isIdOk = arrayClientMsg[iDeId + 1] !== undefined;
      if (isIdOk) {
        clientTCP.write(clientMsg);
        return;
      }
    }
    clientMsg = readline.question("CLIENT --> ");
  }

  while (clientMsg.startsWith("--deleteUser")) {
    const iDeId = arrayClientMsg.indexOf("id");

    if (iDeId !== -1) {
      const isIdOk = arrayClientMsg[iDeId + 1] !== undefined;
      if (isIdOk) {
        clientTCP.write(clientMsg);
        return;
      }
    }
    clientMsg = readline.question("CLIENT --> ");
  }

  console.log("Debes ingresar los datos correctamente.");
  sendMessage();
};

clientTCP.on("connect", () => {
  console.log("Connection successful!");
  sendMessage();
});

clientTCP.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  const objData = JSON.parse(serverMsg);
  console.log(objData);
  sendMessage();
});

clientTCP.on("error", (err) => console.log(err));
