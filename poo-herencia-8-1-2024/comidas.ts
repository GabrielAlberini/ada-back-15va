import crypto from "node:crypto";

class Comida {
  id: string;
  cantDeIngredientes: number;
  cantDeComensales: number;

  constructor(cantDeIngredientes: number, cantDeComensales: number) {
    this.id = crypto.randomUUID();
    this.cantDeIngredientes = cantDeIngredientes;
    this.cantDeComensales = cantDeComensales;
  }

  // Generar un ticket para el cocinero, tiene que tener un id
  mostrarIdComida() {
    return this.id;
  }
}

class Pasta extends Comida {
  nombre: string;
  constructor(
    cantDeIngredientes: number,
    cantDeComensales: number,
    nombre: string
  ) {
    super(cantDeIngredientes, cantDeComensales);
    this.nombre = nombre;
  }

  mostrarInformación() {
    return `La comida seleccionada es ${this.nombre} con ID: ${this.id}, es para ${this.cantDeComensales} personas y se prepara con ${this.cantDeIngredientes} de ingredientes.`;
  }
}

const nioquis = new Pasta(3, 3, "Ñoquis");

const infoNioquis = nioquis.mostrarInformación();

console.log(infoNioquis);
