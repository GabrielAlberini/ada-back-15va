class Animal {
  ojos: boolean;
  oidos: boolean;
  patas: number;
  cola: boolean;

  constructor(ojos: boolean, oidos: boolean, patas: number, cola: boolean) {
    this.ojos = ojos;
    this.oidos = oidos;
    this.patas = patas;
    this.cola = cola;
  }

  comer() {
    console.log("Me gusta comerrr!!");
  }

  respirar() {
    console.log("Ommmmmh");
  }

  caminar() {
    console.log("Me gusta caminar!!!");
  }
}

class Mamifero extends Animal {
  mamas: boolean;
  pelo: boolean;

  constructor(
    mamas: boolean,
    pelo: boolean,
    ojos: boolean,
    oidos: boolean,
    patas: number,
    cola: boolean
  ) {
    super(ojos, oidos, patas, cola);
    this.mamas = mamas;
    this.pelo = pelo;
    this.cola = cola;
  }

  trepar() {
    console.log("Me gusta trepar");
  }
  caminar() {
    console.log("Me gusta caminar");
  }
  saltar() {
    console.log("Me gusta saltar");
  }
  construir() {
    console.log("Me gusta construir");
  }
}

class Anfibio extends Animal {
  constructor(ojos: boolean, oidos: boolean, patas: number, cola: boolean) {
    super(ojos, oidos, patas, cola); // superclass
  }

  nadar() {
    console.log("Me gusta nadar!");
  }
}

class Ave extends Animal {
  alas;
  pico;
  constructor(
    alas: number,
    pico: boolean,
    ojos: boolean,
    oidos: boolean,
    patas: number,
    cola: boolean
  ) {
    super(ojos, oidos, patas, cola);
    this.alas = alas;
    this.pico = pico;
  }

  volar() {
    console.log("Me gusta volarrrr");
  }
}

const lulaGata = new Mamifero(true, false, true, true, 3, true);
const pepeSapo = new Anfibio(true, true, 4, true);
const martaLaPaloma = new Ave(2, true, true, true, 1, false);

const grillo = {
  nombre: "pepe",
  patas: true,
};

// Mamifero
lulaGata.saltar();
lulaGata.comer();

// Anfibio
console.log(pepeSapo.cola);
pepeSapo.nadar();

// Ave
console.log(martaLaPaloma.patas);
martaLaPaloma.caminar();

console.log(pepeSapo, "Aca esta pepe");
