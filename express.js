var express = require('express');
var app = express();

console.log(__dirname);

// access file from the server
app.use('/myfiles', express.static(__dirname + '/files'));

// apply function when reach the route
app.get('/newRoute', function (request, response) {
    response.send('Hello from Express');
});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});