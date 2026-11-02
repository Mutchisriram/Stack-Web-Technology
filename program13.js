var http = require('http');

var students = [
    {roll: 101, name: 'Ravi', branch: 'CSE'},
    {roll: 102, name: 'Priya', branch: 'IT'}
];

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (req.url == '/') {
        res.end(JSON.stringify({message: 'Welcome to Student Server'}));
    }
    else if (req.url == '/students') {
        res.end(JSON.stringify(students));
    }
    else if (req.url == '/student') {
        res.end(JSON.stringify(students[0]));
    }
    else {
        res.end(JSON.stringify({message: 'Page Not Found'}));
    }
});

server.listen(3000, function() {
    console.log('Server running on port 3000');
});
