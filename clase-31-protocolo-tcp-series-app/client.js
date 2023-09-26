// MÓDULO CLIENTE

import net from "net";
import readline from "readline-sync";
import { showDB, eraseDB, updateDB } from "./controller.js";

const OPTIONS = {
  port: 7201,
  host: "127.0.0.1",
};

const clientTCP = net.createConnection(OPTIONS);

const FILMS = [];

const addNewFilm = () => {
  const newFilm = {
    name: "",
    premiere: "",
    cast: [],
    rating: 0,
    gender: "",
  };
  const questions = [
    "Ingrese el nombre de la serie: ",
    "Ingrese la fecha de estreno: ",
    "Ingrese  el nombre completo de tres actores importantes del reparto (separados por coma): ",
    "Ingrese el rating (de 1 a 10): ",
    "Ingrese el genero: ",
  ];

  questions.forEach((question, index) => {
    if (index === 2) {
      // Para la pregunta de los actores, dividimos la entrada en un arreglo de actores.
      const actorsInput = readline.question(question);
      newFilm.cast = actorsInput.split(",").map((actor) => actor.trim());
    } else {
      newFilm[Object.keys(newFilm)[index]] = readline.question(question);
    }
  });

  FILMS.push(newFilm); // Agrega la nueva película al array de películas

  const nextStep = readline.question(
    "¿Desea seguir ingresando datos? (si | no): "
  );

  if (nextStep.toLowerCase() === "si") {
    addNewFilm(); // Llama recursivamente a la función si el usuario desea agregar más películas
  } // Retorna el array completo de películas cuando el usuario decide no ingresar más datos
};

const sendMessage = (message) => {
  while (message === "--showDB") {
    const collection = showDB();
    console.log(collection);
    message = readline.question("CLIENT --> ");
  }
  while (message === "--eraseDB") {
    const stateDeletedDB = eraseDB();
    console.log(stateDeletedDB);
    message = readline.question("CLIENT --> ");
  }
  while (message === "--updateDB") {
    addNewFilm();
    FILMS.forEach((film) => updateDB(film)); // Llama a updateDB para cada película
    console.log("Update database.");
    message = readline.question("CLIENT --> ");
  }
  if (
    message !== "--showDB" ||
    message !== "--eraseDB" ||
    message !== "--updateDB"
  ) {
    const clientMsg = readline.question("CLIENT --> ");
    sendMessage(clientMsg);
  }
};

clientTCP.on("connect", () => {
  console.log("Connection successful!");
  let message = readline.question("CLIENT --> ");
  sendMessage(message);
});

clientTCP.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  console.log("SERVER -->", serverMsg);
  sendMessage();
});

clientTCP.on("error", (err) => console.log(err));
