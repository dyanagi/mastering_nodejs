setTimeout(() => {
  console.log('This is async code')
}, 1)

console.log('This is synchronous code')

const fetchData = () => {
  // Promise: a built-in function in Node.js
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, 1500)
  })
  return promise
}

setTimeout(() => {
  console.log('Time is done')
  fetchData().then(text => {
    console.log(text)
    return fetchData()
  }).then(text2 => {
    console(text2)
  })
})
