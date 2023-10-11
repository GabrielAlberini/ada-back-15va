import net from "node:net";
import * as controller from "./controller/controller.js";

const serverTCP = net.createServer();

const PORT = 4001;

const processParams = (arrayClientMsg) => {
  let response;

  switch (arrayClientMsg[0]) {
    case "--getUsers":
      response = controller.getUsers();
      break;
    case "--getUserInfo":
      response = controller.getUserInfo(arrayClientMsg[2]);
      break;
    case "--createNewUser":
      // --createNewUser name gabriel password 123
      response = controller.createNewUser({
        username: arrayClientMsg[2],
        password: arrayClientMsg[4],
      });
      break;
    case "--deleteUser":
      // --createNewUser name gabriel password 123
      response = controller.deleteUser(arrayClientMsg[2]);
      break;
    case "--login":
      // --createNewUser name gabriel password 123
      response = controller.login({
        username: arrayClientMsg[2],
        password: arrayClientMsg[4],
      });
      break;
  }

  return response;
};

serverTCP.on("connection", (clientTCP) => {
  clientTCP.on("data", (clientData) => {
    const clientMsg = clientData.toString(); // --getUsers
    const arrayClientMsg = clientMsg.split(" "); // ["--getUsers"]
    console.log("Peticion del cliente: ", arrayClientMsg);
    // [ '--getUserInfo', 'id', '1' ]

    const responseServer = processParams(arrayClientMsg);
    clientTCP.write(JSON.stringify(responseServer));
  });

  clientTCP.on("close", () => {
    console.log("Connection stopped :|");
  });

  clientTCP.on("error", () => {
    console.log("El cliente tuvo un error :(");
  });

  console.log("Client connected :)");
});

serverTCP.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
