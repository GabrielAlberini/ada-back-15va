import * as model from "../model/model.js";

const getUsers = () => {
  return model.getUsers();
};

const getUserInfo = (id) => {
  return model.getUserInfo(id);
};

const createNewUser = (dataUser) => {
  return model.createNewUser(dataUser);
};

const deleteUser = (id) => {
  return model.deleteUser(id);
};

const login = (userData) => {
  return model.login(userData);
};

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
