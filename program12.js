var fs = require('fs');
var EventEmitter = require('events');

var event = new EventEmitter();

// Custom event
event.on('studentAdded', function() {
    console.log('Student Added Successfully');
});

// Trigger event
event.emit('studentAdded');

// Read file using stream
var reader = fs.createReadStream('students.txt', 'utf8');

reader.on('data', function(chunk) {
    console.log('Student Data:');
    console.log(chunk);
});

reader.on('end', function() {
    console.log('Reading Completed');
});
