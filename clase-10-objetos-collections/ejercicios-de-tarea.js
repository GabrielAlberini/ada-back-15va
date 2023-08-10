// Definí una función tienenMismaLongitud que reciba como argumentos dos strings a y b y devuelva si tienen la misma longitud.
// OPCION 2: Validar que los descuentos se añadan si el cliente tiene 3 o más productos en el carrito

const validarStock = (carrito, stock) => {
  if(carrito.length <= stock) {
    return "Puedes comprar"
  }
  return false
}

const validarMismaLongitud = (array1, array2) => {
  if(array1.length === array2.length){
    return true
  } 

  return false
}

// Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.

const validarCaracter = (palabra, caracter) => {
  return palabra[palabra.length -1] === caracter
} 

// Definí una función esValida que tome por parámetro una contrasenia (string) y nos indique si tiene 8 caracteres o más.

const validarLongitudContrasenia = (contrasenia, longitudMin) => {
  return contrasenia.length >= longitudMin
}

const burlarse = (frase) => {
  const vocales = "aeiou";
  let fraseBurlona = "";

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) { // Corrección en la condición
      fraseBurlona += "i"; // Corrección en cómo concatenar
    } else {
      fraseBurlona += frase[i]; // Concatenar el carácter original
    }
  }

  return fraseBurlona;
}

// Ejemplo de uso
const resultado = burlarse("programar es para gente inteligente :(");
console.log(resultado); // Output: "prigrimir is piri ginti intiligitinti :("



//-----------------------------------------------------------------------------------

const main = () => {
  const arr1  = [1,2]
  const arr2 = [1,2,3]

  console.log(validarMismaLongitud(arr1, arr2))
  console.log(validarStock(arr1, 10))
  console.log(validarCaracter("auto", "o"))
  console.log(validarLongitudContrasenia("34c34f34f", 9))
  console.log(burlarse("programar es para gente inteligente"))
}

main()
