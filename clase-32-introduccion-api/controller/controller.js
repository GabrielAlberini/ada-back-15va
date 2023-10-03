import * as model from "../model/model.js";

// recibe un array de usuarios
const getUsers = () => {
  // users siempre será un array
  const users = model.getUsers();

  if (users.length > 0) {
    return users;
  } else {
    return "No hay usuarios en la base de datos.";
  }
};

//
const getUserInfo = (id) => {
  const user = model.getUserInfo(id);

  if (user) {
    return user;
  } else {
    return "No se encuentra el usuario en la base de datos.";
  }
};

const createNewUser = (dataUser) => {
  const createdUser = model.createNewUser(dataUser);

  if (createdUser) {
    return "Usario creado con éxito.";
  } else {
    return "El usuario ya éxiste en la base de datos.";
  }
};

const deleteUser = (id) => {
  const deletedUser = model.deleteUser(id);

  if (deletedUser) {
    return "Usuario eliminado con éxito.";
  } else {
    return "No se encuentra el usuario en la base de datos.";
  }
};

const login = (dataUser) => {
  const loggedUser = model.login(dataUser);

  if (loggedUser) {
    return "Usuario logueado con éxito.";
  } else {
    return "No se encuentra el usuario en la base de datos.";
  }
};

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
