import os from "node:os"

const platform = os.platform()
const architect = os.arch()
const hostname = os.hostname()
const actualDir = os.homedir()

console.log(actualDir)
