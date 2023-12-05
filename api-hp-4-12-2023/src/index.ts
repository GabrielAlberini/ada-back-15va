import * as controller from "./controller/controller";

const processParams = (params: string[]) => {
  const param = params[1];

  switch (param) {
    case "all":
      return controller.getAllCharacters();
    case "student":
      return controller.getValidateStudentCharacter(params[2]);
    case "id":
      return controller.getCharacterById(params[2]);
    case "wand":
      return controller.getWandData(params[2]);
    case "house":
      return controller.getFilterByHouse(params[2]);
    default:
      return `${controller.StatusCode.BAD_REQUEST} - ${controller.MessagesCode.BAD_REQUEST}`;
  }
};

const main = (): void => {
  const params = process.argv.splice(2);
  const response = processParams(params);
  console.log(response);
};

main();
