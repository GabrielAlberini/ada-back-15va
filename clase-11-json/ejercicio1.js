// Dada la siguiente collection, realizar las siguientes operaciones:
// - Desarrollar una funcion getNames( ) que reciba como parámetro la correction y que retorne un array con todos los nombres.
// - Desarrollar una función getRatingAverage() que reciba como parametro la collection de peliculas y que retorne el rating promedio
// - Desarrollar una función searchTitle() que reciba un string y la collection como parametros, y que retortne el objeto completo correspondiente al título de la pelicula especificada

const movies = [
  {
    name: "El día de la marmota",
    rating: 9,
    tags: ["comedia", "drama"]
  },
  {
    name: "La La Land",
    rating: 8.5,
    tags: ["musical", "romance"]
  },
  {
    name: "El señor de los anillos: La comunidad del anillo",
    rating: 9.2,
    tags: ["fantasía", "aventura"]
  },
];

// DECLARACIÓN -> declaro como funciona
const getNames = (collection) => {
  const namesArray = []
  for(let i = 0; i < collection.length; i++) {
    namesArray.push(collection[i].name) //los nombres de las películas del array
  }
  return namesArray
}

const getRatingAverage = (collection) => {
  let sumRating = 0
  for (let i = 0; i < collection.length; i++) {
    sumRating += collection[i].rating
  }

  let average = sumRating / collection.length

  return average
}

const searchTitle = (string, collection) => {
  for (let i = 0; i < collection.length; i++) {
    if(collection[i].name === string){
      return JSON.stringify(collection[i])
    }
  }
  return null
}

const main = () => {
  let namesFilms = getNames(movies)
  let averageFilms = getRatingAverage(movies)
  let foundFilms = searchTitle("La La Land", movies)
  console.log(`Los nombres de las peliculas son: `, namesFilms)
  console.log(`El promedio del rating de las películas es: `, averageFilms)
  console.log(`La película encontrada es: ` + foundFilms)
}

main()