var express = require('express');
var app = express();


// To get data from POST method (middleware)
var bodyParser = require('body-parser');
app.use(bodyParser());

var sessions = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessions({
    secret: 'inod234%^&*kajfb',
    resave: false,
    saveUninitialized: true
}));


app.get('/login', function (request, response) {
    if(request.session.user){
        response.redirect('home');
    }
    response.sendFile('login.html', {root: __dirname});
});

app.post('/login', function (request, response) {
    if(request.body.user === 'admin' && request.body.password === 'admin'){
        request.session.user = request.body.user;
        response.end('You are Admin');
    } else {
        response.redirect('login');
    }
});

app.get('/home', function (request, response) {
    response.send('Home Page ' + ' ' +  ' <a href="clear">Delete Session</a>');
});

app.get('/clear', function (request, response) {
    request.session.destroy(function (error) {
        console.log(error);
    });
    response.redirect('login');
});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});