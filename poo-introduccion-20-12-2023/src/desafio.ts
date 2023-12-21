// Crear una clase Movie, que tenga dos propiedades, name de tipo string, y genres de tipo array de strings que indican los géneros a los que pertenece la pelicula. Además tiene que tener un metodo que permita obtener todos los genres, y otro método que permita agregarle más valores a genres.

interface DataMovie {
  name: string;
  genres: string[];
}

// FABRICA
// Materiales (propiedades, datos)
// Acciones  (métodos, funcionalidades)
class Movie {
  name;
  genres;

  constructor(dataMovie: DataMovie) {
    this.name = dataMovie.name;
    this.genres = dataMovie.genres;
  }

  getGenres() {
    return this.genres;
  }

  setGender(newGender: string) {
    this.genres.push(newGender);
  }
}

// CREACIÓN DE PELICULA 1
// Instanciando (creando) una nueva pelicula -> un nuevo objeto
const et = new Movie({
  name: "ET",
  genres: ["fantasia"],
});

// Mostrar en consola la nueva pelicula creada llamada et
console.log(et);

// Acceder al método llamado getGenres()
const genres = et.getGenres();
console.log(genres);

// Añadir un nuevo genero a la pelicula et
et.setGender("drama");

console.log(et);

// CREACIÓN DE PELICULA 2
const dataMovieScaryMovie = {
  name: "Scary Movie",
  genres: ["comedy", "terror", "suspense"],
};

const scaryMovie = new Movie(dataMovieScaryMovie);

const genresScaryMovie = scaryMovie.getGenres();
// console.log(genresScaryMovie)

scaryMovie.setGender("love");

console.log(scaryMovie);
