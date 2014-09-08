var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    path = "./build",
    port = 8888;
// Configuration of our application
app.use(express.static(path));
// Starting the server and tell them everything's ok!
server.listen(port);
console.log("Express is serving " + path + " listening on port " + port);
