import { readFileSync, writeFileSync } from "fs";
const PATH = "./database.json";

const updateDB = (film) => {
  const objData = JSON.parse(readFileSync(PATH));
  objData.push(film);
  const jsonData = JSON.stringify(objData);
  writeFileSync(PATH, jsonData);
  return "Update collection.";
};

const eraseDB = () => {
  writeFileSync(PATH, "[]");
  return "Deleted database.";
};

const showDB = () => JSON.parse(readFileSync(PATH));

export { updateDB, eraseDB, showDB };
