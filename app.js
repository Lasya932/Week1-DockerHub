const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to Docker Hub Automated Builds!');
});

server.listen(3000, () => {
    console.log('Node.js server running on port 3000');
});
