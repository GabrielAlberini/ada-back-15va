// import fs from "node:fs";
import { readFileSync, writeFileSync } from "node:fs";
const PATH = "./database/users-db.json";

const getUsers = () => {
  const data = readFileSync(PATH);
  const jsonData = JSON.parse(data);
  return jsonData;
};

const getUserInfo = (id) =>
  "Devuelve toda la información relativa al usuario cuyo ID es el indicado por parámetro.";

const createNewUser = (dataUser) => "Da de alta un nuevo usuario.";

const deleteUser = (id) =>
  "Elimina al usuario cuyo ID es el indicado por parámetro.";

const login = (dataUser) =>
  "Verifica las coincidencias en la base de datos y devuelve el mensaje correspondiente.";

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
