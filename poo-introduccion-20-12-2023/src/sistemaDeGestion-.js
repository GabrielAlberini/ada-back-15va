// # Consigna: Crear un sistema de gestión de personas utilizando funciones, métodos y propiedades en JavaScript.

// ## Instrucciones:

// 1. Define una función llamada crearPersona que tome dos parámetros (nombre y edad) y devuelva un objeto persona con esas propiedades.

// 2. Crea una funcion llamada mostrarInformacion que imprima en la consola el nombre y la edad de la persona.

// Implementa una funcion llamada cumplirAnios que aumente en 1 la edad de la persona y muestre un mensaje indicando el cambio.

// 3. Desarrolla un método denominado cambiarNombre que permita cambiar el nombre de la persona y muestre un mensaje con el nuevo nombre.

// 4. Utiliza las funciones y métodos anteriores para crear una persona con nombre 'Carlos' y edad 28, mostrar su información inicial, cumplir años y cambiar su nombre a 'Carlitos', y finalmente, mostrar la información actualizada.

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

const personaCarlos = crearPersona("Carlos", 28);
console.log(personaCarlos);

mostrarInformacion(personaCarlos);
cumplirAnios(personaCarlos);
cambiarNombre(personaCarlos, "Carlitos");

console.log(personaCarlos);
