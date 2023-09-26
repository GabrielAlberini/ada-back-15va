// MÓDULO SERVIDOR
import net from "node:net";

const serverTCP = net.createServer();
const PORT = 7201;

serverTCP.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = clientData.toString();
    console.log("CLIENT --> ", clientMsg);
  });
  socket.on("close", () => console.log("Connection stopped"));
  socket.on("error", (err) => console.log(err));
  console.log("Client connected!");
});

// SERVER RUNNING
serverTCP.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
