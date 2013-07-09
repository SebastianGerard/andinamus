var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var out = fs.fileReadSync('index.html');
var buf = new Buffer(out);
var indexS = buf.toString('utf-8');

app.get('/', function(request, response) {
    response.send(indexS);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
