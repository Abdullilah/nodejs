var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

// To get data from POST method (middleware)
var bodyParser = require('body-parser');
app.use(bodyParser());

// access file from the server
app.use('/myfiles', express.static(__dirname + '/files'));


app.get('/', function (request, response) {
    response.sendFile('index.html', {root: path.join(__dirname + '/files')});
});

app.get('/about', function (request, response) {
    response.end('Hello ' + request.query.myInput);
});

app.post('/', function (request, response) {
    // npm install body-parser --save
    console.log(request.body);
    response.end('Hello ' + request.body.myInput);
});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});