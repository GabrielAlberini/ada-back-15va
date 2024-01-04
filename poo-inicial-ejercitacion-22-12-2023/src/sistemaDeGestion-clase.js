class Persona {
  nombre;
  edad;

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarInformacion() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }

  cumplirAnios() {
    this.edad = this.edad + 1;
    console.log(`Ahora ${this.nombre} tiene ${this.edad} años.`);
  }

  cambiarNombre(nombre) {
    this.nombre = nombre;
    console.log(`El nuevo nombre es ${this.nombre}.`);
  }
}

const persona1 = new Persona("ailen", 33);
const persona2 = new Persona("gabriel", 29);

persona2.cambiarNombre("Pepe");
console.log(persona2);
