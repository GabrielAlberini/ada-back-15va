import jsonfile from "jsonfile";
import { pathFile } from "../database";

interface Charater {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: any;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

// GET ALL DATA
const getAllCharacters = () => jsonfile.readFileSync(pathFile);

const validateStudentCharacter = (name: string): Charater[] => {
  const data = getAllCharacters();

  const characters: Charater[] = data.filter((character: Charater) => {
    // const characterLastName = character.name.split(" ").pop(); // "Harry Potter" -> ["Harry", "Potter"]
    const lowerName = name.toLowerCase();
    if (
      character.name.toLowerCase().startsWith(lowerName) &&
      character.hogwartsStudent === true
    ) {
      return character;
    }
  });

  console.log(characters);

  return characters;
};

// const params = process.argv.splice(2);

// validateStudentCharacter(params[1]);

// Daniel Radcliffe -> dan
const getCharacterById = (id: string): Charater | undefined => {
  const data = getAllCharacters();
  // O guardo un personaje o si no encuentro el personaje queda undefined
  const foundCharacter = data.find(
    (character: Charater) => character.id === id
  );
  return foundCharacter;
};

const showWandData = (id: string): Charater | undefined => {
  const data = getAllCharacters();
  const foundCharacter = data.find(
    (character: Charater) => character.id === id
  );
  if (foundCharacter) {
    return foundCharacter.wand;
  }
};

const filterByHouse = (house: string): Charater[] => {
  return [];
};

const wand = showWandData("36bfefd0-e0bb-4d11-be98-d1ef6117a77a");

const showDataWand = (wandData: any) => {
  console.log(
    `La varita esta construida en madera ${wandData.wood}, la escencia es de ${
      wandData.core
    } y la longitud de ${wandData.length * 2.54}cm`
  );
};

showDataWand(wand);
