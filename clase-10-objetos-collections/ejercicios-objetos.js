// Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
// Cada objeto tiene las propiedades nombre, temporada y foto.
// Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

const ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

for(let i = 0; i < ganadoras.length; i++) {
  let nombre = ganadoras[i].nombre
  let temporada = ganadoras[i].temporada
  // console.log(`${nombre} ganó en la temporada ${temporada}.`)
}


// Tenemos un array de objetos, que representa un listado de bandas
// Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
// Mostrar en consola cada banda del array, con la siguiente lógica:
// Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
// Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 4, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 5, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

const validarEstadoBanda = (arrayDeBandas) => {
  for (let i = 0; i < arrayDeBandas.length; i++) {
    if (arrayDeBandas[i].activa === false) {
        console.log(`La banda ${arrayDeBandas[i].nombre} no esta activa`)
    } else {
        console.log(`La banda ${arrayDeBandas[i].nombre} se encuentra activa desde el año ${arrayDeBandas[i].fundacion}`)
    }
  }
}

validarEstadoBanda(bandas)

// Tenemos un objeto en la variable banda, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
// Queremos mostrar:

// En año se fundo
// Cuantos miembros tiene (nombrarlos)
// Cuantos discos tiene
// Cuantas canciones tienen sumando la de todos los discos
// Cuanto dura en promedio cada canción en segundos teniendo en cuneta el promedio total

const band = {
  name: "Led Zeppelin",
  year: 1968,
  active: false,
  thumbnail:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  albums: [
    {
      name: "Led Zeppelin",
      year: 1969,
      songs: ["Good Times, Bad Times", "Communication Breakdown"],
      duration: 2691,
    },
    {
      name: "Led Zeppelin II",
      year: 1969,
      songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duration: 2502,
    },
    {
      name: "Led Zeppelin III",
      year: 1970,
      songs: ["Immigrant Song"],
      duration: 2489,
    },
    {
      name: "Led Zeppelin IV",
      year: 1971,
      songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duration: 2559,
    },
  ],
};

let aniofundacion;
let miembros;
let discos;
let cancionesTotales;
let duracionDeCancionEnPromedio;

const verAnioFundacion = (banda) => {
  return banda.year
}

const mostrarMiembros = (banda) => {
  return banda.members.length 
}

const mostrarDiscos = (banda) => {
  return banda.albums.length
}

const mostrarCancionesTotales = (banda) => {
  let cancionesTotales = 0;

  for (let i = 0; i < banda.albums.length; i++) {
    cancionesTotales += banda.albums[i].songs.length
  }

  return cancionesTotales
}

const mostrarCancionEnPromedio = (banda) => {
}
