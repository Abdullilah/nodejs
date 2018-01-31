var fs = require('fs');

console.log('Before');

// fs.writeFile('./files/file1', 'The Is The New Text','utf8', function (error) {
//     if(error) throw error;
//     console.log('From inside');
// });

fs.writeFileSync('./files/file1', 'The New Text', 'utf8');

console.log('After');