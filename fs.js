var fs = require('fs');

console.log('Before');

// fs.readFile('./files/file', 'utf8', function (error, data) {
//     console.log(data);
// });

var data = fs.readFileSync('./files/file', 'utf8');
console.log(data)

console.log('After');