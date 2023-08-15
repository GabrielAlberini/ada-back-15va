// Crear un programa que indicandole la cantidad de alumnas presentes, te devuelva un número aleatorio

const elegirAlumnaAleatoreamente = (cantDeAlumnas) => {
  let numAleatorio = Math.round((Math.random() * cantDeAlumnas)) // desde 0 a 1
  console.log(`Hoy presenta el ejercicio la compañera número: ${numAleatorio}`)
}

// elegirAlumnaAleatoreamente(8)

// Dada la siguiente collection, realizar las siguientes operaciones:
// - Desarrollar una funcion getNames( ) que reciba como parámetro la correction y que retorne un array con todos los nombres.
// - Desarrollar una función getRatingAverage() que reciba como parametro la collection de peliculas y que retorne el rating promedio
// - Desarrollar una función searchTitle() que reciba un string y la collection como parametros, y que retortne el objeto completo correspondiente al título de la pelicula especificada

// filter, find, some, map, forEach (no retorna)

const getNames = (movies) => {
  const namesMovies = movies.map((movie) => movie.name)
  return namesMovies
}

const getRatingAverage = (movies) => {
  // 1 - suma de raitings
  // 2 - promedio

  let sumRating = 0
  let avarage = 0

  movies.forEach(movie => {
    sumRating += movie.rating
  });

  avarage = sumRating / movies.length

  return avarage
}

const searchTitle = (movies, title) => {
  const foundMovie = movies.find((movie) => {
    if(movie.name === title) {
      return movie
    }
  })

  return foundMovie.name
}
 
// const main = () => {
//   const movies = [
//     {
//       name: "El día de la marmota",
//       rating: 9,
//       tags: ["comedia", "drama"]
//     },
//     {
//       name: "La La Land",
//       rating: 8.5,
//       tags: ["musical", "romance"]
//     },
//     {
//       name: "El señor de los anillos: La comunidad del anillo",
//       rating: 9.2,
//       tags: ["fantasía", "aventura"]
//     },
//   ];

//   console.log(`Los nombres de las peliculas son: `, getNames(movies))
//   console.log(`El rating promedio es: ${getRatingAverage(movies)}`)
//   console.log(`La pelicula que quiero es: ${searchTitle(movies, "La La Land")}`)
// }

// main()



// filter, find, some, map, forEach (no retorna)

// filter -> devuelve un NUEVO ARRAY con las conicidencias
// find -> devuelve EL PRIMER ELEMENTO que coincida
// some -> devuelve true o false dependiendo la coincidencia
// map -> devuelve UN NUEVO ARRAY con el uso de cada elemento
// forEach -> bucle normal, itera código según elementos tenga un array. NO RETORNA VALORES

// Dado un array de nùmeros, imprimir la suma de los nùmeros en el array que sean mayores que el promedo del arraY

// 1 - calcule el promedio
// 2 - encuentre numeros mayores al promedio

const notas = [1,7,3,9,8,10]

// const calcularPromedio = (array) => {
//   let contador = 0
//   let promedio = 0

//   array.forEach((nota) => {
//     contador += nota
//   })

//   promedio = contador / array.length

//   return promedio.toFixed(2)
// }

// const encontrarNumerosMayAlPromedio = (arr, promedio) => {
//   const notasAltas = arr.filter((nota) => {
//     if(nota > promedio) {
//       return nota
//     }
//   })

//   return notasAltas
// }


// const main = () => {
//   let promedio = calcularPromedio(notas)
//   let notasMayoresAlPromedio = encontrarNumerosMayAlPromedio(notas, promedio)

//   console.log(`El promedio es ${promedio}`)
//   console.log(`Las notas mayores al promedio son: ${notasMayoresAlPromedio}`)
// }

// main()

// 1. Crea un array de nombres: "Ana", "Juan", "María", "Luis", "Elena".
// 2. Ordena el array alfabéticamente.
// 3. Convierte todos los nombres a mayúsculas.
// 4. Imprime el array resultante.

const nombres = ["Ana", "Juan", "María", "Luis", "Elena"]

const ordenarAlfabeticamente = (array) => {
  const arrayOrdenado = nombres.sort()

  return arrayOrdenado
}

// 1. Crea un array de objetos con propiedades: nombre, edad y país.
// 2. Filtra los objetos donde la edad sea mayor a 25.
// 3. Crea un nuevo array solo con los nombres de los objetos filtrados.
// 4. Imprime el array de nombres resultante.

const personas = [
  {
    nombre: "Luisa", 
    edad: 28,
    pais: "Argentina"
  },
  {
    nombre: "Rosario",
    edad: 27,
    pais: "Argentina"
  },
  {
    nombre: "Annaly",
    edad: 25,
    pais: "Venezuela"
  }
]

const encontrarPersonasMayores = (array) => {
  const personasFiltradas = array.filter((persona) => {
    if(persona.edad > 25) {
      return persona
    }
  })

  return personasFiltradas
}

const mostrarNombresDePersonas = (array) => {
  return array.map((persona) => persona.nombre)
}

const main = () => {
  let nombresOrdenados = ordenarAlfabeticamente(nombres)
  let personasFiltradas = encontrarPersonasMayores(personas)
  let arrayConNombres = mostrarNombresDePersonas(personas)

  // console.log(nombresOrdenados)
  // console.log(personasFiltradas)
  console.log(arrayConNombres)
}

main()