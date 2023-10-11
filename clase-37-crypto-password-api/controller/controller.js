import * as model from "../model/model.js";

const getUsers = () => {
  const users = model.getUsers(); // array de usuarios

  if (users.length > 0) {
    return users;
  } else {
    return "No hay usuarios en la base de datos.";
  }
};

const getUserInfo = (id) => {
  // La función getUserInfo SIEMPRE retorna o un objeto con la data del usuario o false
  const user = model.getUserInfo(id);

  if (user) {
    return user;
  } else {
    return "El usuario no existe en la base de datos.";
  }
};

const createNewUser = (dataUser) => {
  return model.createNewUser(dataUser);
};

const deleteUser = (id) => {
  const responseDelete = model.deleteUser(id);

  if (responseDelete) {
    return "Usuario eliminado con éxito.";
  } else {
    return "El usuario no existe en la base de datos.";
  }
};

const login = (userData) => {
  const responseLogin = model.login(userData);

  if (responseLogin) {
    return "Usuario loggeado con éxito.";
  } else {
    return "No se pudo logguear con éxito.";
  }
};

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
