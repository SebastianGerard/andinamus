var express = require('express');

var app = express.createServer(express.logger());

function hello()
{
    var fs = require('fs');
    fs.readFile("index.html", function (err, data) {
    if (err) throw err;
    var buf = new Buffer(data);
    response.send(buf.toString('utf-8'));
});
}

app.get('/', function(request, response) {
 hello();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
