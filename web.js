var express = require('express');

var app = express.createServer(express.logger());

function hello()
{
    var fs = require('fs');
    var dato = "Hola";
    fs.readFile("index.html", function (err, data) {
    if (err) throw err;
    var buf = new Buffer(data);
    dato = buf.toString('utf-8');
});
return dato;
}

app.get('/', function(request, response) {
    response.send(hello());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
