var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

// npm install nodemon --save -g : auto restarting

// To get data from POST method (middleware)
// npm install body-parser --save-dev
var bodyParser = require('body-parser');
app.use(bodyParser());

// To use Cookies
// npm install cookie-parser --save-dev
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// access file from the server
app.use('/myfiles', express.static(__dirname + '/files'));

app.get('/', function (request, response) {
    response.sendFile('index.html', {root: path.join(__dirname + '/files')});
    response.cookie('myCookie', 'myValue');
});

app.get('/deleteCookie', function (request, response) {
    response.clearCookie('myCookie');
    response.end('Cookie Was Cleared...');
});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});