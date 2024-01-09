interface DataPlant {
  nombre: string;
  especie: string;
}

class Planta {
  id: string;
  nombre: string;
  especie: string;

  constructor(nombre: string, especie: string) {
    this.nombre = nombre;
    this.especie = especie;
    this.id = this.#generateId();
  }

  static showNameUser() {
    const users = process.argv.splice(2);
    return `El usuario se llama ${users[0]}`;
  }

  #generateNumberRandom() {
    return Math.floor(Math.random() * 100000);
  }

  #generateId() {
    return `${this.#generateNumberRandom()}-${this.#generateNumberRandom()}-${this.#generateNumberRandom()}`;
  }

  showDataPlant(): DataPlant {
    const nombre = this.nombre;
    const especie = this.especie;
    return { nombre, especie };
  }

  showInfoId() {
    return `Mi ID es: ${this.id}`;
  }
}

const jazmin = new Planta("Jazmin", "Floreal");
console.log(jazmin);

const idJazmin = jazmin.showInfoId();
console.log(idJazmin);

const user = Planta.showNameUser();
console.log(user);

const dataPlant = jazmin.showDataPlant();
console.log(dataPlant);
