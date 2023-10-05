import net from "node:net";
import readline from "readline-sync";

const OPTIONS = {
  port: 4001,
  host: "127.0.0.1",
};

const clientTPC = net.createConnection(OPTIONS);

const sendMessage = () => {
  const clientMsg = readline.question("Peticion del cliente:");

  while (clientMsg.startsWith("--getUsers")) {
    clientTPC.write(clientMsg);
    return;
  }
  while (clientMsg.startsWith("--getUserInfo")) {
    clientTPC.write(clientMsg);
    return;
  }
  while (clientMsg.startsWith("--createNewUser")) {
    clientTPC.write(clientMsg);
    return;
  }
  while (clientMsg.startsWith("--deleteUser")) {
    clientTPC.write(clientMsg);
    return;
  }
  while (clientMsg.startsWith("--login")) {
    clientTPC.write(clientMsg);
    return;
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
