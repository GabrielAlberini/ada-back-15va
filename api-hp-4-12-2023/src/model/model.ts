// Leyendo la base de datos

import jsonfile from "jsonfile";
import { pathFile } from "../database";
import { handleLoweCase } from "../utils/handleLowerCase";

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
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

interface Wand {
  wood: string;
  core: string;
  length: number;
}

const getAllCharacters = (): Charater[] => jsonfile.readFileSync(pathFile);

const getValidateStudentCharacter = (name: string): Charater[] => {
  const data = getAllCharacters();

  const filtederCharactersByName: Charater[] = data.filter(
    (character: Charater) => {
      const lowerNameParam = handleLoweCase(name);
      const lowerCharacterName = handleLoweCase(character.name);
      if (
        lowerCharacterName.startsWith(lowerNameParam) &&
        character.hogwartsStudent === true
      ) {
        return character;
      }
    }
  );

  return filtederCharactersByName;
};

const getCharacterById = (id: string): Charater | undefined => {
  const data = getAllCharacters();
  const foundCharacter = data.find(
    (character: Charater) => character.id === id
  );
  return foundCharacter;
};

const getWandData = (id: string): Wand | undefined => {
  const data = getAllCharacters();
  const foundCharacter = data.find(
    (character: Charater) => character.id === id
  );

  if (foundCharacter) {
    return foundCharacter.wand;
  }
};

const getFilterByHouse = (house: string): Charater[] => {
  const data = getAllCharacters();
  const lowerHouse = handleLoweCase(house);

  const filteredCharactersByHouse = data.filter((character: Charater) => {
    const lowerCharacterHouse = handleLoweCase(character.house);

    if (lowerCharacterHouse.includes(lowerHouse)) {
      return character;
    }
  });

  return filteredCharactersByHouse;
};

export {
  getAllCharacters,
  getValidateStudentCharacter,
  getCharacterById,
  getWandData,
  getFilterByHouse,
  Charater,
};
