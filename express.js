var express = require('express');
var path = require('path');
var app = express();

// access file from the server
app.use('/myfiles', express.static(__dirname + '/files'));

app.get('/', function (request, response) {
    response.sendFile('index.html', {root: path.join(__dirname + '/files')});
});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});