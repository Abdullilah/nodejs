var express = require('express');
var router = express.Router();
var app = express();

app.use('/mainRoute' ,router);

router.get('/', function (req, res) {
    res.end('Ths Is The Main Route');
    // mainRoute
});

router.get('/firstSubRoute', function (req, res) {
    res.end('Ths Is The First Route');
    // mainRoute/firstSubRoute
});

router.get('/secondSubRoute', function (req, res) {
    res.end('Ths Is The Second Route');
    // mainRoute/secondSubRoute
});

router.get('/secondSubRoute/:id', function (req, res) {
    res.end(JSON.stringify(req.params));
    // mainRoute/secondSubRoute/23
    // {id: 23}
});

router.get('/secondSubRoute/:id/:name/:surname', function (req, res) {
    res.end(JSON.stringify(req.params));
    // mainRoute/secondSubRoute/23/Ahmad/Annan
    // {id: 23 , name: Ahmad, surname: Annan}
});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});