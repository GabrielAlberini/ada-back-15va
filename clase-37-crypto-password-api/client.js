import net from "node:net";
import readline from "readline-sync";

const OPTIONS = {
  port: 4001,
  host: "127.0.0.1",
};

const clientTPC = net.createConnection(OPTIONS);

const sendMessage = () => {
  // clientMsg es un string
  // --deleteUserId id 1
  // ["--deleteUserId", "id", "1"]
  let clientMsg = readline.question("Peticion del cliente:");

  while (clientMsg.startsWith("--getUsers")) {
    const arrayClientMsg = clientMsg.split(" ");
    if (arrayClientMsg.length === 1) {
      clientTPC.write(clientMsg);
      return;
    }
    console.log(
      "Mensaje del cliente: Esta petición solo debe tener un parámetro."
    );
    clientMsg = readline.question("Peticion del cliente:");
  }
  while (clientMsg.startsWith("--getUserInfo")) {
    const arrayClientMsg = clientMsg.split(" ");
    // si no encuentra el indice del strin id, retorna -1, si no, retorna la posición
    const indiceDeParamId = arrayClientMsg.indexOf("id");

    // Indicamos que falta el parámetro en la petición y le volvemos a preguntar por ella
    if (indiceDeParamId === -1) {
      console.log("Ingresa por favor el parámetro 'id'");
      clientMsg = readline.question("Peticion del cliente:");
    }

    //Guardando en una variable el indice del valor del id. En caso de que no exista, será undefined
    const indiceDelValorId = arrayClientMsg[indiceDeParamId + 1];

    // Si el valor del id existe, le enviamos la petición al server, si no ingresa a este if
    if (indiceDelValorId) {
      clientTPC.write(clientMsg);
      return;
    }

    // Si llega acá es porque no le valor el valor del id, asi que lo comunica y le vuelve a pedir una petición
    console.log("Ingresa un valor para el parámetro 'id'");
    clientMsg = readline.question("Peticion del cliente:");
  }
  while (clientMsg.startsWith("--createNewUser")) {
    const arrayClientMsg = clientMsg.split(" ");
    // --createNewUser name NOMBRE password PASSWORD
    const indiceDelParamName = arrayClientMsg.indexOf("name");
    const indiceDelParamPassword = arrayClientMsg.indexOf("password");

    if (indiceDelParamName === -1) {
      console.log("Ingresa por favor el parámetro 'name'");
      clientMsg = readline.question("Peticion del cliente:");
    }
    if (indiceDelParamPassword === -1) {
      console.log("Ingresa por favor el parámetro 'password'");
      clientMsg = readline.question("Peticion del cliente:");
    }
    //Guardando en una variable el indice del valor de name y password. En caso de que no exista, será undefined
    const siExtisteValorName =
      arrayClientMsg[indiceDelParamName + 1] !== "password";
    const siExtisteValorPassword =
      arrayClientMsg[indiceDelParamPassword + 1] !== undefined;

    if (siExtisteValorName && siExtisteValorPassword) {
      clientTPC.write(clientMsg);
      return;
    }
    console.log("Ingresa un valor para los parametros esperados");
    clientMsg = readline.question("Peticion del cliente:");
  }
  while (clientMsg.startsWith("--deleteUser")) {
    const arrayClientMsg = clientMsg.split(" ");
    // si no encuentra el indice del strin id, retorna -1, si no, retorna la posición
    const indiceDeParamId = arrayClientMsg.indexOf("id");

    // Indicamos que falta el parámetro en la petición y le volvemos a preguntar por ella
    if (indiceDeParamId === -1) {
      console.log("Ingresa por favor el parámetro 'id'");
      clientMsg = readline.question("Peticion del cliente:");
    }

    //Guardando en una variable el indice del valor del id. En caso de que no exista, será undefined
    const indiceDelValorId = arrayClientMsg[indiceDeParamId + 1];

    // Si el valor del id existe, le enviamos la petición al server, si no ingresa a este if
    if (indiceDelValorId) {
      clientTPC.write(clientMsg);
      return;
    }

    // Si llega acá es porque no le valor el valor del id, asi que lo comunica y le vuelve a pedir una petición
    console.log("Ingresa un valor para el parámetro 'id'");
    clientMsg = readline.question("Peticion del cliente:");
  }
  while (clientMsg.startsWith("--login")) {
    const arrayClientMsg = clientMsg.split(" ");
    // --login name NOMBRE password PASSWORD
    const indiceDelParamName = arrayClientMsg.indexOf("name");
    const indiceDelParamPassword = arrayClientMsg.indexOf("password");

    if (indiceDelParamName === -1) {
      console.log("Ingresa por favor el parámetro 'name'");
      clientMsg = readline.question("Peticion del cliente:");
    }
    if (indiceDelParamPassword === -1) {
      console.log("Ingresa por favor el parámetro 'password'");
      clientMsg = readline.question("Peticion del cliente:");
    }
    //Guardando en una variable el indice del valor de name y password. En caso de que no exista, será undefined
    const siExtisteValorName =
      arrayClientMsg[indiceDelParamName + 1] !== "password";
    const siExtisteValorPassword =
      arrayClientMsg[indiceDelParamPassword + 1] !== undefined;

    // Si es true name, le enviamos la petición al server, si no ingresa a este if
    if (siExtisteValorName) {
      clientTPC.write(clientMsg);
      return;
    } else {
      console.log("Ingresa un valor para el parámetro 'id'");
      clientMsg = readline.question("Peticion del cliente:");
    }

    // Si es true password, le enviamos la petición al server, si no ingresa a este if
    if (siExtisteValorPassword) {
      clientTPC.write(clientMsg);
      return;
    } else {
      console.log("Ingresa un valor para el parámetro 'id'");
      clientMsg = readline.question("Peticion del cliente:");
    }
  }

  console.log("Debes ingresar los datos correctamente.");
  sendMessage();
};

clientTPC.on("connect", () => {
  console.log("Connection successful!");
  sendMessage();
});

clientTPC.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  const parsedMsg = JSON.parse(serverMsg);
  console.log("Mensaje del servidor: ", parsedMsg);
  sendMessage();
});
