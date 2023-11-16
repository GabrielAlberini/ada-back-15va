// Instalar typescript de forma global
// npm install -g typescript --force

// const sumar = (n1: number, n2: number): number => {
//   return n1 + n2;
// };

const libros = ["libro1", "libro2", "libro3"];

const tomarLibroPorSuNombre = (nombre: string): string | undefined => {
  const libroEncontrado = libros.find((libro) => libro === nombre);
  return libroEncontrado;
};

const libro = tomarLibroPorSuNombre("libro1");

//---------------------------

type Puerto = 1234 | 3000 | 8080;

const puertosDisponibles = [1234, 3000, 8080];

const validarPuertos = (puerto: Puerto): void => {
  if (puerto) {
    console.log("Puedes ingresar :)");
  }
};

validarPuertos(1234);
