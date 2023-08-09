// el nombre de la función SIEMPRE debe ser una acción
// una función -> una acción -> estructura mejor el código
// 1-declaración de función 2-invocación de la función
// parametros -> variables de uso interno/privado
// argumentos -> valores reales pasados a los parámetros
// return -> "expulsa" = da la posibilidad de usar los datos internos, fuera de ella
// valores por defecto -> en caso de que no se pasen los argumentos, toma este valor

// Crear una función que calcule el descuento aplicado a un producto. Recibe dos parámetros (precio original y precio con descuento) y devuelve el porcentaje de descuento aplicado.

// output -> el descuento realizado

let precioOriginal = 100
let precioConDescuento = 80

// scope -> alcance
function calcularDescuento(precio, descuento) { 
  return ((precio - descuento) / precio ) * 100 // 20
}

console.log(calcularDescuento(precioOriginal, precioConDescuento))

//Crear una función que calcule el área de un triángulo. Recibe dos parámetros (base y altura) y devuelve el área.

//Versión simplificada -> retornando directamente el resultado en un string
function calcularArea(base, altura) {
  return `${(base * altura) / 2}km`
}

//Versión larga
// function calcularArea(base, altura) {
//   let mensaje = ""
//   let resultado = (base * altura) / 2
//   mensaje = `${resultado}km` 
//   return mensaje
// }

console.log(calcularArea(10, 30))

// Crea una función que reciba como parámetro una cadena de texto y devuelva la cantidad de vocales que tiene.

// arbol -> 2
// yo -> 1


function contarVocales(cadenaDeTexto){
  const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let contadorDeVocales = 0;

  for (let i = 0; i < cadenaDeTexto.length; i++) {
    if(vocales.includes(cadenaDeTexto[i])){
    contadorDeVocales++
    }
  }
  
  return contadorDeVocales
}

const texto = "el viaje con mama fue genial"
console.log(contarVocales(texto))

// Crear una función que verifique si un número es par o impar. Recibe un número como parámetro y devuelve true si es par o false si es impar.


function verificarParOImparS(numero){
  return numero % 2 === 0 // boolean
}

function verificarParOImparL(numero) {
  if(numero % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(verificarParOImparL(3))