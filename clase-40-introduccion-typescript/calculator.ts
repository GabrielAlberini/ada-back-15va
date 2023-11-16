//  operacion -> suma, resta, division o multiplicacion

export type Operacion = "suma" | "resta" | "division" | "multiplicacion";

const calculadora = (
  operacion: Operacion,
  n1: number,
  n2: number
): number | string => {
  switch (operacion) {
    case "suma":
      return n1 + n2;
    case "resta":
      return n1 - n2;
    case "division":
      if (n2 === 0) {
        throw new Error("No se puede dividir por 0");
      } else {
        return n1 / n2;
      }
    case "multiplicacion":
      return n1 * n2;
  }
};

export { calculadora };
