const crearPersona = (nombre, edad) => {
  return { nombre, edad };
};

const mostrarInformacion = (persona) => {
  console.log(`Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`);
};

const cumplirAnios = (persona) => {
  persona.edad = persona.edad + 1;
  console.log(`Ahora ${persona.nombre} tiene ${persona.edad} años.`);
};

const cambiarNombre = (persona, nombre) => {
  persona.nombre = nombre;
  console.log(`El nuevo nombre es ${persona.nombre}.`);
};
