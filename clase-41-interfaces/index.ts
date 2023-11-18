interface User {
  id: number;
  name: string;
  active: boolean;
}

// Dado un array de datos de usuarios, crea una collection. Utiliza el contrato de la interfaz para que cada usuario creado lo respete.

const dataUsers = [1231, "María", true, 91823, "Pepe", false];

const createCollection = (data: any) => {
  const collection: User[] = [];

  for (let i = 0; i < data.length; i += 3) {
    const newUser = createNewUser(data[i], data[i + 1], data[i + 2]);
    collection.push(newUser);
  }

  return collection;
};

const createNewUser = (id: number, name: string, active: boolean): User => {
  return { id, name, active };
};

// Dada un collection de alumnos calcular el pomedio de aprobados

interface Student {
  name: string;
  present: boolean;
  note?: number;
}

const collectionStudents: Student[] = [
  {
    name: "Lucia",
    present: true,
    note: 10,
  },
  {
    name: "Mario",
    present: false,
  },
  {
    name: "Micaela",
    present: true,
    note: 8,
  },
  {
    name: "Ana",
    present: true,
    note: 7,
  },
  {
    name: "Lucas",
    present: false,
  },
];

const addNotes = (listStudent: any) => {
  let sumNotes = 0;
  let cantNotes = 0;

  listStudent.forEach((student: Student) => {
    if (student.note) {
      sumNotes += student.note;
      cantNotes++;
    }
  });

  return { sumNotes, cantNotes };
};

const calculateAverage = (data: any) => {
  const average = data.sumNotes / data.cantNotes;
  return average;
};

const main = (): void => {
  const users = createCollection(dataUsers);
  const sumNotes = addNotes(collectionStudents);
  const average = calculateAverage(sumNotes);
  console.log("The average is:", average.toFixed(2));
};

main();
