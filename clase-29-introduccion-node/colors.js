// Dependiendo de mi programa voy a mostrar un mensaje personalizado en la consola

// Si el usuario es mayor a 18, el mensaje aparecerá de color verde
// Si el usuario es menor a 18, el mensaje aparecerá de color rojo
// const colors = require('colors'); // common js
import colors from "colors"  // ES modules

const validarEdad = (edad) => {
  if(edad >= 18) {
    console.log(colors.green("sos mayor"))
  }else {
    console.log(colors.red("sos menor"))
  }
}

validarEdad(21)

