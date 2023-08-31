const calculator = require("./calculator")

const args = process.argv.splice(2)
const operation = args[0].slice(2)
const type = args[1]

const main = () => {
  switch(operation) {
    case "add": 
      console.log(calculator.add(Number(args[1]), Number(args[2])))
    break
    case "subtract":
      console.log(calculator.subtract(Number(args[1]), Number(args[2])))
    break
    case "divide":
      console.log(calculator.divide(Number(args[1]), Number(args[2])))
    break
    case "multiply":
      console.log(calculator.multiply(Number(args[1]), Number(args[2])))
    break
    case "pow":
      console.log(calculator.pow(Number(args[1]), Number(args[2])))
    break
    case "per":
      console.log(calculator.per(type, args.splice(2)))
    break
    case "area": 
      if(args[3] !== undefined) {
        console.log(calculator.area(type, [Number(args[2]), Number(args[3])]))
      } else {
        console.log(calculator.area(type, Number(args[2])))
      }
    break
  }
}

main()