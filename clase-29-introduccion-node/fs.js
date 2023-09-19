// File system -> módulo primitivo de node para la lectura y escritura de archivos

import { readFileSync, writeFileSync } from "node:fs"

const fileData = readFileSync("./db/users.json")
const jsArray = JSON.parse(fileData)

jsArray[0].id = 1
jsArray[1].id = 2

const jsonData = JSON.stringify(jsArray)

writeFileSync("./db/users.json", jsonData)
