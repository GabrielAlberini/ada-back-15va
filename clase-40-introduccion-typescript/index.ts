import { calculadora } from "./calculator.ts";
import { Operacion } from "./calculator.ts";
import { saludar } from "./saludar.ts";

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
