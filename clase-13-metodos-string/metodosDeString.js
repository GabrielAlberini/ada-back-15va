const frase = "Hola, bienvenidas a la clase número 22, de métodos de string"

// El método split() se usa en una cadena para dividirla en un array de subcadenas
// basadas en un separador especificado. El separador puede ser cualquier cadena
// o expresión regular.
const arrayDePalabras = frase.split(" ")

// El método charAt() se usa en una cadena para obtener el carácter en la posición especificada por el índice. Los índices comienzan en 0.

const caracter = frase.charAt(14)
// console.log(caracter)

// El método slice() se utiliza en una cadena para extraer una porción de la cadena.
// Puedes especificar el índice de inicio y el índice de finalización. El índice de
// finalización es opcional y si no se proporciona, la porción se extraerá hasta el
// final de la cadena.

const palabraRecortada = frase.slice(6) // bienvenidas a la clase número 22, de métodos de string

// El método join() se usa en un array para concatenar todos los elementos en una
// cadena utilizando el separador especificado. El separador es opcional y se coloca
// entre cada par de elementos concatenados.

const nombres = ["daniela", "rosario", "annaly"]

const deArrayAString = nombres.join("")

console.log(deArrayAString)
















// callback => una funcion que se ejecuta despues de que pasa algo
// const numeros = [1,2,3,4]

// numeros.forEach((numero) => {
//   console.log(numero)
// })