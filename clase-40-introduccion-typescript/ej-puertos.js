const puertos = [1234, 3000, 8080];

const validarPuerto = (puerto) => {
  if (puerto === 1234 || puerto === 3000 || puerto === 8080) {
    console.log("Puedes ingresar :)");
  } else {
    console.log("PUERTO INCORRECTO :O");
  }
};

validarPuerto(34523452345);
