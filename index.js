let url = require('url');
let http = require('http');
let fileSystem = require('fs');

http.createServer((request, response) => {
    let pageRequested = url.parse(request.url)
    let fileName = "." + pageRequested.pathname;
    fileSystem.readFile(fileName, (error, data) => {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("404 Not Found");
        }  
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();
    });
}).listen(8080);