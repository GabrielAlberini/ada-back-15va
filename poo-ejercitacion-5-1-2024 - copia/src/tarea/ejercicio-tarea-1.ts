// Analizá bien todo el programa y pensá qué es lo que tendría que hacer la función creteItemId(). Completale el cuerpo con lo que haga falta.

type ItemId = `${string}--<${number}>--${string}`;

class User {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

class Product {
  name: string;
  cost: number;

  constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
  }
}

function createItemId(item: User | Product): ItemId | string {
  if (item instanceof User) {
    return `${item.name}--<${item.id}>--${User.name}`;
  } else if (item instanceof Product) {
    return `${item.name}--<${item.cost}>--${Product.name}`;
  } else {
    return "No cumple con los requisitos, intente nuevamente.";
  }
}

const user = new User("Snowden", 459);
const product = new Product("Signal", 750);

console.log(createItemId(user));
console.log(createItemId(product));

console.log(user instanceof User);

const phone = {
  name: "xiaomi",
  cost: 123,
};

const phone2 = new Product("xiaomi", 123);

console.log(createItemId(phone2));
