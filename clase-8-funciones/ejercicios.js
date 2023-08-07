//CUANDO DECLARO UNA FUNCIÓN, DECLARO A SU VEZ SOLO LA LÓGICA

//Ejercicio 1: Conversión de grados Celsius a grados Fahrenheit.
function convertirAFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}
// console.log(convertirAFahrenheit(10))

// Ejercicio 2: Crear una función que calcule el área de un círculo. Recibe un parámetro (radio) y devuelve el área del círculo.

function calcularAreaCirculo(radio){
  let radioDelCirculo = Math.PI * (radio ** 2)
  console.log(radioDelCirculo)
}
// calcularAreaCirculo(2)
// calcularAreaCirculo(10)
// calcularAreaCirculo(15)
// calcularAreaCirculo(1)

//Crear una función que calcule el promedio de edad de un grupo de personas. Recibe un array de edades y devuelve el promedio

const edades = [1,2,3]

// En los parámetros SOLO declaro los nombres de los datos que me pasarán a futuro
function calcularPromedioDeEdades(arrayDeEdades) {
  let sumaDeEdades = 0

  for (let i = 0; i < arrayDeEdades.length; i++) {
    sumaDeEdades += arrayDeEdades[i]
  }

  let promedio = sumaDeEdades / arrayDeEdades.length
  console.log(promedio)
}

// calcularPromedioDeEdades([1,2,3])
// calcularPromedioDeEdades([2,3,4])

//Crear una función que cuente la cantidad de veces que aparece un elemento en un array. Recibe un array y un elemento como parámetros y devuelve la cantidad de veces que aparece en el array.

let array = [1,2,3,1,4,1] // 1? -> 3

function contarElementosRepetidos(array, elemento){
  let cantDeRepeticiones = 0

  for (let i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      cantDeRepeticiones++
    }
  }

  if(cantDeRepeticiones) {
    console.log(`El ${elemento} aparece ${cantDeRepeticiones} veces.`)
  } else {
    console.log(`El elemento "${elemento}" no aparece en la lista`)
  }
}

// contarElementosRepetidos(array, 1)

// Escuchame usuario, existe una función que si le pasas un array y un dato x, te dice cuantas veces está dentro de ese array, se llama -> contarElementosRepetidos

// let nombres = ["gonzalo", "raul", "maría", "saul", "mariano", "gonzalo", "gonzalo"]

// contarElementosRepetidos(nombres, "gonzalo")
// contarElementosRepetidos(nombres, "maría")

// Crea una función que reciba como parámetros un array de palabras y devuelva la palabra más larga

// DECLARACIÓN DE FUNCIÓN
function contarCaracteres(arrayDeNombre) {
  let maxPalabra = ""

  for (let i = 0; i < arrayDeNombre.length; i++) {
    let nombre = arrayDeNombre[i]
    
    // Guadalupe -> 9     >      7
    if(nombre.length > maxPalabra.length) {
      maxPalabra = nombre
    }
  }

  return maxPalabra
}

let nombres = ["Juan", "Ricardo", "Pepe", "Margarita"]

console.log(contarCaracteres(nombres))