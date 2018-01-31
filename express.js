var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();


// access file from the server
app.use('/myfiles', express.static(__dirname + '/files'));

app.get('/', function (request, response) {
    response.sendFile('index.html', {root: path.join(__dirname + '/files')});
});

app.get(/^(.+$)/, function (req, res) {
    try{
        if(fs.statSync(path.join(__dirname + '/files' , req.params[0]+'.html')).isFile()){
            res.sendFile(req.params[0]+'.html', {root: path.join(__dirname + '/files')})
        }
    } catch (error){
        console.log(error);
        res.sendFile('404page.html', {root: path.join(__dirname + '/files')})
    }

});

// listen to the port
app.listen(4000, function () {
    console.log('New Server');
});