const operations = require("./calculator")
const args = operations.args

const add = operations.add(Number(args[0]), Number(args[1]))

console.log(add)