import { calculadora } from "./calculator";
import { Operacion } from "./calculator";
import { saludar } from "./saludar";

const main = () => {
  const args = process.argv;

  const operacion: Operacion = args[2] as Operacion;
  const numeroUno = Number(args[3]);
  const numeroDos = Number(args[4]);

  // const resultado = calculadora(operacion, numeroUno, numeroDos);

  const personas = ["Tatiana", "Ailen", "Carolina", "Gabriel"];

  saludar(personas);
};

main();
