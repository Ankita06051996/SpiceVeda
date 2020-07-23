var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {

    if (req.url === "/") {
        fs.readFile("MyPages/dev.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Error</h1><br /><br />To create paage please enter: ' + req.url);
        resp.end();
    }
});

server.listen(3000);
 
console.log('Server Started listening on 3000');