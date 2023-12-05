// Manejar las respuestas de los modelos

import * as model from "../model/model";
import { Charater } from "../model/model";

const enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

const enum MessagesCode {
  OK = "Solicitud exitosa",
  BAD_REQUEST = "Por favor verifique los parámetros ingresados.",
  NOT_FOUND = "No se encontró la información solicitada.",
}

type ResponseMsgError = `${number} - ${string}`;

interface Response {
  status: StatusCode;
  response: Charater;
}

// -------------------------------------------------------------

const getAllCharacters = () => {
  const characters = model.getAllCharacters();

  const response = {
    status: StatusCode.OK,
    response: characters,
  };

  return response;
};

const getValidateStudentCharacter = (name: string) => {
  if (typeof name !== "string") {
    return `${StatusCode.BAD_REQUEST} - ${MessagesCode.BAD_REQUEST}`;
  }

  const data = model.getValidateStudentCharacter(name);

  if (data.length === 0) {
    return `${StatusCode.NOT_FOUND} - ${MessagesCode.NOT_FOUND}`;
  }

  const response = {
    status: StatusCode.OK,
    response: data,
  };

  return response;
};

const getCharacterById = (id: string): Response | ResponseMsgError => {
  if (typeof id !== "string") {
    return `${StatusCode.BAD_REQUEST} - ${MessagesCode.BAD_REQUEST}`;
  }

  const character = model.getCharacterById(id);

  if (!character) {
    return `${StatusCode.NOT_FOUND} - ${MessagesCode.NOT_FOUND}`;
  }

  const response = {
    status: StatusCode.OK,
    response: character,
  };

  return response;
};

const getWandData = (id: string) => {
  if (typeof id !== "string") {
    return `${StatusCode.BAD_REQUEST} - ${MessagesCode.BAD_REQUEST}`;
  }

  const wandData = model.getWandData(id);

  if (!wandData) {
    return `${StatusCode.NOT_FOUND} - ${MessagesCode.NOT_FOUND}`;
  }

  const response = {
    status: StatusCode.OK,
    response: wandData,
  };

  return response;
};

const getFilterByHouse = (house: string) => {
  if (typeof house !== "string") {
    return `${StatusCode.BAD_REQUEST} - ${MessagesCode.BAD_REQUEST}`;
  }

  const data = model.getFilterByHouse(house);

  if (data.length === 0) {
    return `${StatusCode.NOT_FOUND} - ${MessagesCode.NOT_FOUND}`;
  }

  const response = {
    status: StatusCode.OK,
    response: data,
  };

  return response;
};

export {
  getAllCharacters,
  getValidateStudentCharacter,
  getCharacterById,
  getWandData,
  getFilterByHouse,
  StatusCode,
  MessagesCode,
  ResponseMsgError,
};
