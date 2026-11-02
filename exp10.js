var fs = require('fs');
var http = require('http');
var path = require('path');
var os = require('os');
var events = require('events');

// 1. File System
fs.writeFileSync('student.txt', 'Name: Ravi, Roll: 101');
console.log('File Created');
console.log(fs.readFileSync('student.txt', 'utf8'));

// 2. HTTP Server
var server = http.createServer(function(req, res) {
    res.end('Welcome to Node.js');
});

server.listen(3000, function() {
    console.log('Server running on port 3000');
});

// 3. Path Module
console.log('File Name:', path.basename('C:/college/student.txt'));
console.log('Extension:', path.extname('C:/college/student.txt'));

// 4. OS Module
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());

// 5. Events Module
var eventEmitter = new events.EventEmitter();

eventEmitter.on('welcome', function() {
    console.log('Welcome Event Triggered');
});

eventEmitter.emit('welcome');
