// El supermercado "Argenchino" está necesitando desarrollar una interfaz que le permita acceder a los datos de su planta de forma mas amigable.
// STOCK_DB.js tiene la base de datos. Desarrollar y exportar en este módulo las siguientes funciones.

// - allStock()                                            -> Retorna todo el stock completo
// - getCategory(categoria1)                               -> Retorna una categoria (Comestibles, bebidas, limpieza o ferreteria)
// - getProduct(categoria1, categoria2, producto)        -> Retorna un objeto cuya propiedad es el nombre del producto, junto con su valor (cinta, papasFritas, etc)
// - getTotalCategoryAmount(categoria1)                    -> Retorna la cantidad total de todos los productos existentes dentro de la categoria pasada por parámetro.
// - getTotalAmount()                                      -> Retorna la cantidad total de todos los productos existentes dentro del stock.

// objeto con tres niveles -> categoria principal -> sub-categoria -> productos
// console.log(stock.comestibles.snacks.nachos)

const stock = {
  comestibles: {
    snacks: {
      papasFritas: 15,
      maniJapones: 20,
      nachos: 90
    },
    verduleria: {
      papa: 60,
      batata: 100,
      cebolla: 80
    },
    lacteos: {
      queso: 500,
      leche: 980,
      crema: 450,
    }
  },
  bebidas: {
    cervezas: {
      artesanal: 980,
      importada: 1580,
      comun: 140
    },
    aguas: {
      sinGas: 5221,
      conGas: 1995
    },
    blancas: {
      vodka: 360,
      whisky: 400,
      licor: 148
    }
  },
  limpieza: {
    baño: {
      limpiadorCrema: 5645,
      limpiaVidrios: 564,
      lavandina: 155,      
      esponja: 65464
    },
    cocina: {
      detergente: 1597,
      antiGrasa: 14744,
      virulana: 3365,
      escoba: 56444,
      rejilla: 1225
    }
  },
  ferreteria: {
    varios: {
      pinza: 1554,
      cinta: 6665,
      atornillador: 9987,
      lija: 3221
    }
  }
}

// declarar y exportar funciones

exports.allStock = () => {
  // -> un objeto con todo el stock
  return stock
} 

exports.getCategory = (category) => {
  // -> un objeto de la categoria seleccionada
  if(stock[category]) {
    return stock[category] 
  } else {
    return "No existe categoria en stock"
  }
} 

exports.getProduct = (category, subCategory, product) => {
  // -> un objeto donde la key es el nombre del producto y el valor la cantidad que tiene en stock
  // {papa: 60}
  if(stock[category][subCategory] === undefined){
    return "No existe la categoria"
  }

  const value = stock[category][subCategory][product]
  const key = product

  return { [key]: value}
} 

exports.getTotalCategoryAmount = (categoryUser) => {
  // -> la suma total del stock de los productos de la categoria
  let count = 0

  if(stock[categoryUser] === undefined) {
    return "No existe la categoria en el stock"
  }

  for(let subCategory in stock[categoryUser]){
    for(let producto in stock[categoryUser][subCategory]) {
      count += stock[categoryUser][subCategory][producto]
    }
  }
  
  return count
} 

exports.getTotalAmount = () => {} // -> la suma total de todo el stock

