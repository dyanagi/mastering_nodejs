// Creating a Node server
const http = require('http')

// Anonymous Function
http.createServer(function rqListener (req, res) {
})

// Arrow Function
const server = http.createServer((req, res) => {
  console.log(req)
})

server.listen(3005)

// Access http://localhost:3005/
