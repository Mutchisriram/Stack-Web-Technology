const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");
const EventEmitter = require("events");

// fs
fs.writeFileSync("student.txt", "Name: Ravi, Marks: 90");
console.log(fs.readFileSync("student.txt", "utf8"));

// path
console.log("File:", path.basename(__filename));
console.log("Extension:", path.extname(__filename));

// os
console.log("Platform:", os.platform());
console.log("CPU:", os.arch());

// events
const e = new EventEmitter();

e.on("welcome", () => {
    console.log("Welcome Student");
});

e.emit("welcome");

// http
http.createServer((req, res) => {
    res.end("Welcome to Student Server");
}).listen(3000);

console.log("Server running on port 3000");
