const numbers = process.argv.slice(2)

console.log(
  numbers.reduce((accumulator, arg) => Number(arg) + accumulator, 0)
)
