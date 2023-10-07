// import fs from "node:fs"; --> importando un objeto --> fs.readFileSync()
import { readFileSync, writeFileSync } from "node:fs";
import { v4 as uuid } from "uuid";

const PATH = "./database/users-db.json";

// modificando o consumiendo la base de datos
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

// datauser SIEMPRE sera un objeto con la siguiente estructura:
// {
//   username: "",
//   password: "",
// }
const createNewUser = (dataUser) => {
  const bufferData = readFileSync(PATH);
  // parsedData -> array con todos los usuarios
  const parsedData = JSON.parse(bufferData);

  // user -> si encuentra un usuario con el nombre pasado por parámetro user, sera undefined, si no, un objeto con la data del usuario
  const user = parsedData.find((user) => {
    if (user.username === dataUser.username) {
      return user;
    }
  });

  if (user) {
    return "Ya existe el usuario en la base de datos.";
  }

  dataUser.userId = uuid();

  // {
  //   username: "",
  //   password: "",
  //   userId: "rfklj334k-3f-23f-f233f2f3-f2"
  // }

  parsedData.push(dataUser);
  const jsonData = JSON.stringify(parsedData);
  writeFileSync(PATH, jsonData);

  return "Nuevo usuario creado con éxito.";
};

const deleteUser = (id) => {
  // id -> 1230912jiwef
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);

  const user = parsedData.find((user) => {
    if (user.userId === id) {
      return user;
    }
  });

  // el signo ! es un operador logico que indica la inversión del dato booleano
  // si es undefined sera true
  // si es un objeto con infomación del usuario sera false
  if (!user) {
    return false;
  }

  const filteredData = parsedData.filter((user) => {
    if (user.userId !== id) {
      return user;
    }
  });

  writeFileSync(PATH, JSON.stringify(filteredData));

  return true;
};

// datauser SIEMPRE sera un objeto con la siguiente estructura:
// {
//   username: "",
//   password: "",
// }
const login = (dataUser) => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);

  const foundUserByName = parsedData.find((user) => {
    if (user.username === dataUser.username) {
      return user;
    }
  });

  if (foundUserByName === undefined) {
    return false;
  } else {
    if (foundUserByName.password === dataUser.password) {
      return true;
    } else {
      return false;
    }
  }
};

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
