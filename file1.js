var http = require('http');
var server = http.createServer(engine);


server.listen(4000, function () {
    console.log('This function applied when the server hit')
});

function engine(request, response) {
    response.writeHead(200, {'Content-Type': 'text/pain'});
    response.end(request.url);
}