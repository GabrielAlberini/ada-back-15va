interface DataGato {
  name: string;
  age: number;
}

class Gato {
  name;
  age;

  constructor(dataGato: DataGato) {
    this.name = dataGato.name;
    this.age = dataGato.age;
  }

  rugir() {
    return `Grr soy ${this.name}, y tengo ${this.age} años :)`;
  }
}

const dataBirmano = { name: "Pepito", age: 12 };

const birmano = new Gato(dataBirmano);
const abisinio = new Gato({ name: "Luisito", age: 1 });

const rugido = abisinio.rugir();
console.log(rugido);
