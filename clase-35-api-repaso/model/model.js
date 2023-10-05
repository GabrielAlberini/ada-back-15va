// import fs from "node:fs"; --> importando un objeto --> fs.readFileSync()
import { readFileSync, writeFileSync } from "node:fs";
import { v4 as uuid } from "uuid";

const PATH = "./database/users-db.json";

// modificar la base de datos
// retorna los resultados a controller.js

const getUsers = () => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);
  return parsedData;
};

const getUserInfo = (id) => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);

  const user = parsedData.find((user) => {
    console.log(user);
    if (user.userId === id) {
      return user;
    }
  });

  if (user) {
    return user;
  } else {
    return false;
  }
};

const createNewUser = (dataUser) => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);

  dataUser.userId = uuid();

  parsedData.push(dataUser);

  const jsonData = JSON.stringify(parsedData);

  writeFileSync(PATH, jsonData);

  return dataUser;
};

const deleteUser = (id) => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);

  const filteredData = parsedData.filter((user) => {
    if (user.userId !== id) {
      return user;
    }
  });

  writeFileSync(PATH, JSON.stringify(filteredData));

  if (parsedData.length < filteredData) {
    return "No se borro el usuario.";
  } else {
    return "Borrado con éxito";
  }
};

const login = (dataUser) => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);

  const foundUserByName = parsedData.find((user) => {
    if (user.username === dataUser.username) {
      return user;
    }
  });

  if (foundUserByName === undefined) {
    return "El usuario no existe en la base de datos.";
  } else {
    if (foundUserByName.password === dataUser.password) {
      return "Logeado con éxito";
    } else {
      return "El usuario no existe en la base de datos.";
    }
  }
};

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
