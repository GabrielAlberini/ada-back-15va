// Crea un programa que encuentre el máximo de tres números. Una función debe encontrar al número y otra debe utilizarlo para mostrar en consola un mensaje que diga:
// El numero mayor entre "a", "b" y "c" es: "numMayor"

// const encontrarNumMayor = (n1, n2, n3) => {
//   let numMayor = n1
//   if(n2 > n1) {
//     numMayor = n2
//   }
//   if(n3 > numMayor) {
//     numMayor = n3
//   }

//   return numMayor
// }

// const mostrarNumMayor = (n1, n2, n3, numeroMayor) => console.log(`El numero mayor entre ${n1}, ${n2} y ${n3} es: ${numeroMayor}`)


// //                            3
// mostrarNumMayor(encontrarNumMayor(1,2,3))


// Crea un programa que mostre en consola un mensaje que diga:
// Hola "nombre completo", como estas?

// El programa debe tener 3 funciones:
// - Una debe crear el nombre completo a través de un nombre y un apellido. Tambien
// unir en el medio el apodo en caso que lo tenga. En caso que no tenga apodo,
// indicarlo al final del nombre completo.
// - La segunda función unirá el nombre completo con la frase compartida.
// - La tercera función transformará la frase en mayúscula o minúscula según la elección del
// usuario.


//MEJORAR: si tiene apodo, incluir el mismo entre nombre y apellido -> Gabriel "Gabo" Alberini, si no al final -> Gabriel Alberini (no tiene apodo)
const crearNombreCompleto = (nombre, apellido, apodo = "no tiene apodo") => `${nombre} ${apellido} (${apodo})`

const saludar = (nombreCompleto) => `Hola, ${nombreCompleto}, como estas?`

// M -> mayúscula
// m -> minúscula
const transformarSaludo = (saludo, modo) => {
  let saludoTransformado = ""
  if(modo === "m") {
    saludoTransformado = saludo.toLocaleLowerCase()
  } else {
    saludoTransformado = saludo.toUpperCase()
  }

  console.log(saludoTransformado)
} 

transformarSaludo(saludar(crearNombreCompleto("Gabriel", "Alberini")), "M")