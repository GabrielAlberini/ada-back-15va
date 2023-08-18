let frase = "Hola, me Gusta eL helado de frutilla"

const fraseConMayusculas = (frase) => {
  let fraseConvertida = ""
  const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
  
  let arrayDeCaracteres = frase.split("")

  arrayDeCaracteres.forEach((caracter) => {
    if(vocales.includes(caracter)) {
      fraseConvertida += "@"
    } else {
      fraseConvertida += caracter.toLowerCase()
    }
  })

  return fraseConvertida
}

console.log(fraseConMayusculas(frase))
