// Crear una collection con 25 objetos. Cada objeto tiene solamente una propiedad y un número aletorio entre 10 y 99 como valor.
// Cada propiedad de los objetos creados toman su nombre aleatoriamente de un array dado de letras.

// Ejemplo: 

// [
//   { k: 40 }, 
//   { i: 97 }
// ]

// Las propiedades no se pueden repetir, sus valores si.
// Desarrollar una funcion que ordene el array de menor a mayor.
// Desarrollar una función que busque dentro del array un número que el usuario pasa a través de la terminal.

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

process.argv

// 1 - variables
// 2 - declaracion de funciones
// 3 - invocación de funciones

const seleccion = process.argv[2]
const letraAleatoria = () => letras.splice(Math.floor(Math.random() * letras.length), 1)[0]
const numeroAleatorio = () => Math.floor(Math.random() * 100)


const crearColeccion = (cant) => {
  const coleccion = []
  for(let i = 0; i < cant; i++) {
    const letra = letraAleatoria()
    const valor = numeroAleatorio()
    
    const nuevoObjeto = {
      [letra]: valor
    }

    coleccion.push(nuevoObjeto)
  }
  return coleccion
}

const coleccionCreada = crearColeccion(25)


const encontrarObjeto = (coleccion, numero) => {
  let numeroConvertido = Number(numero)

  const resultado = coleccion.find((obj) => {
    const valor = Object.values(obj)[0]
    return valor === numeroConvertido
  })

  if(resultado === undefined) {
    return "No se encontró el objeto"
  } else {
    return resultado
  }
}

const objetoConValorEncontrado = encontrarObjeto(coleccionCreada, seleccion)
console.log(objetoConValorEncontrado)