// A reference type
const array = ['Foo', 'Bar', 100, 200]

// Iterate
for (let item of array) {
  console.log(item)
}

// Map
console.log(
  array.map(item => {
    return 'Item: ' + item
  })
)

array.push('new item')

console.log(
  array
)

// Copy
const copiedArray = array.slice()
const copiedArray2 = [...array] // Spread operator

copiedArray.push('Copied!')
copiedArray2.push('Copied2!')

console.log('array: ', array)
console.log('copiedArray: ', copiedArray)
console.log('copiedArray2: ', copiedArray2)

