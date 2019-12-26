// Object Destructuring

const person = {
  name: 'Michael'
}

const printName = (person) => person.name
const printName2 = ({ name }) => name

console.log('method 1:', printName(person))
console.log('method 2:', printName2(person))

const { name } = person
console.log(name)


// Array Destructuring
const hobbies = ['Cooking', 'Hiking', 'Travelling']
const [hobby1, hobby2, hobby3] = hobbies

console.log(hobby1, hobby2, hobby3)
