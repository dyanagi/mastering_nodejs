const person = {
  name: 'Michael',
  age: 25,
  greet() {
    console.log('Hello! My name is ' + this.name)
  }
}

person.greet()

