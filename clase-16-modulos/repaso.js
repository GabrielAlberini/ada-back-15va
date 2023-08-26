// Crear una collection con 25 objetos. Cada objeto tiene solamente una propiedad y un número aletorio entre 10 y 99 como valor.
// Cada propiedad de los objetos creados toman su nombre aleatoriamente de un array dado de letras.

// Ejemplo: 

// [
//   { k: 40 }, 
//   { i: 97 }
// ]

// Las propiedades no se pueden repetir, sus valores si.
// Desarrollar una función que tome todos los valores de las propiedades de los objetos de la collection dentro de un array.
// Desarrollar una funcion que ordene el array de menor a mayor.
// Desarrollar una función que busque dentro del array un número que el usuario pasa a través de la terminal.

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const letraAleatoria = () => letras.splice(Math.floor(Math.random() * letras.length), 1)[0];
const numeroAleatorio = () => Math.floor(Math.random() * 100);

const crearColeccion = (numDeElementos) => {
  const coleccion = [] 
  
  for (let i = 0; i <= numDeElementos; i++) {
    const key = letraAleatoria()
    const value = numeroAleatorio()

    const nuevoObjeto = {
      [key]: value
    }

    coleccion.push(nuevoObjeto)
  }

  return coleccion
}

const coleccionCreada = crearColeccion(25);

const arrayConValores = coleccionCreada.map((objeto) => {
  const value = Object.values(objeto)[0]
  return value
})

const buscarObjeto = (coleccion, numero) => {
  const objetoEncontrado = coleccion.find((objeto) => {
    const valor = Object.values(objeto)[0]
    return numero === valor
  })

  if(objetoEncontrado) {
    return objetoEncontrado
  } else {
    return "Objeto no encontrado"
  }
}

const main = () => {
  const argumento = Number(process.argv[2])

  const objetoEncontrado = buscarObjeto(coleccionCreada, argumento)
  console.log(objetoEncontrado)
}

main()