const filePath = process.argv[2]

// Access here for documentation
//  file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/fs.html
const contents = require('fs').readFileSync(filePath).toString()

console.log(contents.split("\n").length - 1)
