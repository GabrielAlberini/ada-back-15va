// Módulos
const saludar = (nombre) => {
  console.log(`Hola ${nombre}`)
}

const gritar = (frase) => {
  console.log(`¡¡¡¡${frase}!!!!`)
}

// Agregar propiedad a objeto
exports.saludar = saludar
exports.gritar = gritar