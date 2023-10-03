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
const PORT = 7204;

const processParams = (request) => {
  // request -> --createNewUser name gabriel password test123
  const arrayClientMsg = request.split(" ");
  const action = arrayClientMsg[0].slice(2);
  // --createNewUser
  // createNewUser

  // A continuación debería ejecutar las funciones del controlador
  // action -> getUserInfo

  // --deleteUser id 1
  switch (action) {
    case "getUserInfo":
      return getUserInfo(arrayClientMsg[2]);
    case "getUsers":
      return getUsers();
    case "createNewUser":
      return createNewUser({
        username: arrayClientMsg[2],
        password: arrayClientMsg[4],
      });
    case "deleteUser":
      return deleteUser(arrayClientMsg[2]);
    case "login":
      return login({
        username: arrayClientMsg[2],
        password: arrayClientMsg[4],
      });
  }
};

serverTCP.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = clientData.toString();
    // --getUserInfo id 1
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
