// filter -> devuelve un NUEVO ARRAY con las conicidencias
// find -> devuelve EL PRIMER ELEMENTO que coincida
// some -> devuelve true o false dependiendo la coincidencia
// map -> devuelve UN NUEVO ARRAY con el uso de cada elemento
// forEach -> bucle normal, itera código según elementos tenga un array. NO RETORNA VALORES

const numeros = [1,2,3,4,5,6,7,8]

const numuerosFiltrados = numeros.filter((numero)=> {
  if(numero > 4) {
    return numero
  }
})

const numeroEncontrado = numeros.find((numero) => {
  if(numero === 6) {
    return numero
  }
})

// version tradicional
const validarCero = numeros.some((numero) => {
  if(numero === 0) {
    return true
  }
})

// versión moderna
const validarCero1 = numeros.some(numero => numero === 0)


const numerosMapeados = numeros.map((numero, index) => {
  const objeto = {
    elemento: numero,
    posicion: index
  }

  return objeto
})

console.log(numerosMapeados)