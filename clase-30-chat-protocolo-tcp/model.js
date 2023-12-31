// Recibe las directivas de controller.js y se conecta con las base de datos (history.json en nuestro caso) para procesar la información y retornar los valores solicitados. Es decir, que el modelo (model.js) se encarga de crear, leer, actualizar y borrar datos de la base de datos.

// Importar FS.
// Leer el JSON.
// Desarrollar 3 funciones que permitan leer, borrar y actualizar el JSON.
// Exportar las funciones usando la sintaxis de ECMAScript Modules (export {...}).

import { readFileSync, writeFileSync } from "node:fs";

//1
const getHistory = () => {
  const history = readFileSync("history.json");
  const arrayHistory = JSON.parse(history);
  const jsonHistory = JSON.stringify(arrayHistory);

  return jsonHistory;
};

const eraseHistory = () => {
  writeFileSync("history.json", "[]");
};

const pushMessage = (message) => {
  console.log(message.message !== "--eraseMessages");
  if (
    message.message !== "--history" &&
    message.message !== "--eraseMessages"
  ) {
    console.log("entro");
    const history = readFileSync("history.json");
    const arrayHistory = JSON.parse(history);
    arrayHistory.push(message);
    const jsonHistory = JSON.stringify(arrayHistory);
    writeFileSync("history.json", jsonHistory);
  }
};

export { getHistory, eraseHistory, pushMessage };
