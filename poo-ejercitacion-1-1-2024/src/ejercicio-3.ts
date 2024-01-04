// Para este desafío, te proponemos que pases este test.

// Para eso, tenés que crear una clase Banda, con las siguientes características:

// Un método constructor con los parámetros members y albums.
// members espera un array de strings
// albums espera un array de objetos con esta estructura: { title, songs: (array de strings) }
// Ambos parámetros (members y albums) deben guardarse en alguna propiedad del objeto.
// Un método llamado getFirstAlbum: debe devolver el primer álbum de la banda señalada.
// Un método llamado getAllAlbums: debe devolver todos los álbumes de la banda señalada.
// Un método llamado getAllMembers: debe devolver un array de strings con el nombre de todos los members de la banda señalada.
// Un método llamado getRandomSong(albumTitle): debe devolver una canción (string) del albumSeñalado en el parámetro.

// crear la clase Banda aquí

// no modificar este test

// const miranda = {
//   members: ["cantante1", "cantante2"],
//   albums: [
//     {
//       title: "album1",
//       songs: ["song1", "song2"],
//     },
//   ],
// };

// import { testClaseBanda } from "./test/validateClass.js";

interface Album {
  title: string;
  songs: string[];
}

class Band {
  members: string[];
  albums: Album[];

  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }

  getFirstAlbum() {
    const firstAlbum = this.albums[0];
    return firstAlbum;
  }

  getAllAlbums() {
    const albums = this.albums;
    return albums;
  }

  getAllMembers() {
    const members = this.members;
    return members;
  }

  getRandomSong(titleAlbum: string) {
    // Nada personal
    const album = this.albums.find((album) => album.title === titleAlbum);

    if (!album) {
      return "No se encuentra el álbum.";
    }

    const indice = Math.floor(Math.random() * album.songs.length);
    const randomSong = album.songs[indice];
    return randomSong;
  }
}

const membersSodaEstereo = ["Gustavo Cerati", "Zeta Bosio", "Charly Alberti"];

const albumesSodaEstereo = [
  {
    title: "Nada Personal",
    songs: [
      "Te hacen falta vitaminas",
      "Cuando Pase el Temblor",
      "El Cuerpo del Delito",
      "Efectos Especiales",
    ],
  },
  {
    title: "Test2",
    songs: ["Cancion1", "Cancion2", "Cancion3"],
  },
];

const sodaEstereo = new Band(membersSodaEstereo, albumesSodaEstereo);

const testClaseBanda = () => {
  const members = ["jroberts", "bpitt"];
  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };
  const banda = new Band(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong("album 1");

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log("testClaseBanda passed");
  } else {
    throw "testClaseBanda not passed";
  }
};

const main = () => {
  testClaseBanda();
};

main();
