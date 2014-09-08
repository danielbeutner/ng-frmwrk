var express = require('express'),
    http = require('http'),
    app = express();
app.use(express.static(path));
var path = "./build",
    port = 8284,
    server = http.createServer(app);
server.listen(port);
