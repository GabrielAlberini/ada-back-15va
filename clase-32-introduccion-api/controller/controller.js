import * as model from "../model/model.js";

const getUsers = () => model.getUsers();
const getUserInfo = (id) => model.getUserInfo(id);
const createNewUser = (dataUser) => model.createNewUser(dataUser);
const deleteUser = (id) => model.deleteUser(id);
const login = (dataUser) => model.login(dataUser);

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
