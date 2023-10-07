import net from "node:net";
import * as controller from "./controller/controller.js";

const serverTCP = net.createServer();

const PORT = 4001;

serverTCP.on("connection", (clientTCP) => {
  clientTCP.on("data", (clientData) => {
    const clientMsg = clientData.toString(); // --getUsers
    const arrayClientMsg = clientMsg.split(" "); // ["--getUsers"]
    console.log("Peticion del cliente: ", clientMsg);
    // [ '--getUserInfo', 'id', '1' ]
    console.log(clientMsg);

    switch (arrayClientMsg[0]) {
      case "--getUsers":
        const usersObj = controller.getUsers();
        clientTCP.write(JSON.stringify(usersObj));
        break;
      case "--getUserInfo":
        const userInfoObj = controller.getUserInfo(arrayClientMsg[2]);
        clientTCP.write(JSON.stringify(userInfoObj));
        break;
      case "--createNewUser":
        // --createNewUser name gabriel password 123
        const newUser = controller.createNewUser({
          username: arrayClientMsg[2],
          password: arrayClientMsg[4],
        });
        clientTCP.write(JSON.stringify(newUser));
        break;
      case "--deleteUser":
        // --createNewUser name gabriel password 123
        const deleteState = controller.deleteUser(arrayClientMsg[2]);
        clientTCP.write(JSON.stringify(deleteState));
        break;
      case "--login":
        // --createNewUser name gabriel password 123
        const loginState = controller.login({
          username: arrayClientMsg[2],
          password: arrayClientMsg[4],
        });
        clientTCP.write(JSON.stringify(loginState));
        break;
    }
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
