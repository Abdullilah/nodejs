var http = require('http');

http.createServer(engine).listen(4000);

function engine(request, response) {
    response.writeHead(200, {'Content-Type': 'text/pain'});
    response.end('Hello From The Server Side');
}