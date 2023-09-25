// MÓDULO SERVIDOR

import net from "node:net";
import readline from "readline-sync";
import * as controller from "./controller.js";

const serverTCP = net.createServer();
const PORT = 7200;

serverTCP.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = clientData.toString();

    let serverMsg;
    if (clientMsg !== "--history" && clientMsg !== "--eraseMessages"){
      console.log("CLIENT --> ", clientMsg);
    }


    switch (clientMsg) {
      case "--history":
        serverMsg = controller.getHistory();
        break;
      case "--eraseMessages":
        controller.eraseHistory();
      default:
        const newMsg = { 
          message: clientMsg,
          sentBy: process.argv[3] ,
          date: new Date().toLocaleString()
        }
        controller.pushMessage(newMsg);
        serverMsg = readline.question("SERVER --> "); // chau
        break;
    }

    socket.write(serverMsg);
  });

  socket.on("close", () => console.log("Connection stopped"));
  socket.on("error", (err) => console.log(err));

  console.log("Client connected!");
});

// SERVER RUNNING

serverTCP.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
