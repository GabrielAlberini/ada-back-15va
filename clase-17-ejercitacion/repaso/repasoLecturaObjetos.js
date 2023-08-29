const persona = {
  nombre: "gabriel",
  arbolGenealogico: {
    abuelo: "juan"
  }
}

const encontrarPropiedad = (obj, prop, subProp) => {
  console.log(obj[prop][subProp])
}

encontrarPropiedad(persona, "gustosDeHelado", "abuelo")