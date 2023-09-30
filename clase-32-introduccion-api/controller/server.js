// MÓDULO SERVIDOR
import net from "node:net";
import {
  getUsers,
  getUserInfo,
  createNewUser,
  deleteUser,
  login,
} from "../controller/controller.js";

const serverTCP = net.createServer();
const PORT = 7205;

const processParams = (request) => {
  const arrayClientMsg = request.split(" ");
  // [ "--getUsers" ]
  const action = arrayClientMsg[0].slice(2);
  // getUsers

  // A continuación debería ejecutar las funciones del controlador
  switch (action) {
    case "getUserInfo":
      return getUserInfo();
    case "getUsers":
      return getUsers();
    case "createNewUser":
      return createNewUser();
    case "deleteUser":
      return deleteUser();
    case "login":
      return login();
  }
};

serverTCP.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = clientData.toString();
    const serverResponse = processParams(clientMsg); // -> envia el mensaje del cliente para evaluar y ejecutar funciones del controller

    socket.write(JSON.stringify(serverResponse));
  });

  socket.on("close", () => console.log("Connection stopped"));
  socket.on("error", (err) => console.log(err));

  console.log("Client connected!");
});

// SERVER RUNNING
serverTCP.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
