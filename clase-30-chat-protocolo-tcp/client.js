// MÓDULO CLIENTE

import net from "net";
import readline from "readline-sync";
import { pushMessage } from "./controller.js";

const OPTIONS = {
  port: 7200,
  host: "127.0.0.1",
};

const clientTCP = net.createConnection(OPTIONS);

const sendMessage = () => {
  const message = readline.question("CLIENT --> ");
  clientTCP.write(message);
};

clientTCP.on("connect", () => {
  console.log("Connection successful!");
  sendMessage();
});

clientTCP.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  const newMsg = { 
    message: serverMsg,
    sentBy: process.argv[3] ,
    date: new Date().toLocaleString()
  }
  pushMessage(newMsg);
  console.log("SERVER -->", serverMsg);
  sendMessage();
});

clientTCP.on("error", (err) => console.log(err));
