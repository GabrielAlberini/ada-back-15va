import * as model from "./model.js";

const updateDB = (film) => model.updateDB(film);
const eraseDB = () => model.eraseDB();
const showDB = () => model.showDB();

export { updateDB, eraseDB, showDB };
