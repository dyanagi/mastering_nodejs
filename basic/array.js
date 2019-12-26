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

console.log(
  array
)
