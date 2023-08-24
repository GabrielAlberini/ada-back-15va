const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// desde que posición, cuantos elementos
// retorna lo recortado
const indiceRandom = Math.floor(Math.random() * letras.length)
const arrayConLetra = letras.splice(indiceRandom, 1)
const letraAleatoria = arrayConLetra[0]

console.log(letraAleatoria)
console.log(letras)


