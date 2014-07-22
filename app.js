var fs = require('fs');

var fileContents = fs.readFileSync('data.txt');



var express = require('express');

var app = express();


app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
});

var server = app.listen(6086, function() {
	console.log('Express server listening on port ' + server.address().port);
});
