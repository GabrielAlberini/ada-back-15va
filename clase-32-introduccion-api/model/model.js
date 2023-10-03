// import fs from "node:fs";
import { readFileSync, writeFileSync } from "node:fs";
import crypto from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { __dirname } from "../database/dirname.js";

const PATH = __dirname + "/users-db.json";

const getUsersData = () => {
  const data = readFileSync(PATH);
  const parsedData = JSON.parse(data);
  return parsedData;
};

const hashPass = (password) => {
  const hash = crypto.createHash("sha256");
  const hashedPass = hash.update(password).digest("binary");
  return hashedPass;
};

const getUsers = () => {
  const users = getUsersData();

  const mappedData = users.map((user) => {
    const newObjUser = {
      username: user.username,
      userId: user.userId,
    };
    return newObjUser;
  });

  return mappedData;
};

const getUserInfo = (id) => {
  const data = getUsersData();

  const foundUser = data.find((user) => {
    if (user.userId === id) {
      return user;
    }
  });

  if (foundUser) {
    return foundUser;
  }
  return false;
};

const createNewUser = (dataUser) => {
  const data = getUsersData();
  const username = dataUser.username;
  const password = dataUser.password;

  const foundUser = data.find((user) => user.username === username);

  if (foundUser) {
    return false;
  }

  const newUser = {
    username: username,
    userId: uuidv4(),
    password: hashPass(password),
  };

  data.push(newUser);

  writeFileSync(PATH, JSON.stringify(data));
  return true;
};

const deleteUser = (id) => {
  const data = getUsersData();

  const foundUser = data.find((user) => user.userId === id);

  if (foundUser === undefined) {
    return false;
  }

  // find, map, filter, some
  const filteredUsers = data.filter((user) => {
    if (user.userId !== id) {
      return user;
    }
  });

  writeFileSync(PATH, JSON.stringify(filteredUsers));

  return true;
};

const login = (dataUser) => {
  const data = getUsersData();
  const username = dataUser.username;
  const password = dataUser.password;

  // objeto || undefined
  const foundUser = data.find((user) => {
    if (user.username === username) {
      return user;
    }
  });

  if (foundUser === undefined) {
    return false;
  }

  if (foundUser) {
    const validatePass = foundUser.password === password;
    if (validatePass) {
      return true;
    }
    return false;
  }
};

export { getUsers, getUserInfo, createNewUser, deleteUser, login };
