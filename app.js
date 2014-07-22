var fs = require('fs');

// var fileContents = fs.readFileSync('data.txt');


var express = require('express');

var app = express();


app.get('/', function(req, res) {
	// res.header('Content-Type', 'text/html');
	// res.send(fileContents);
	fs.readFile('data.txt', function(err, data){
  	res.header('Content-Type', 'text/html');
	res.send(data);
	})

});

app.get('/:filename', function(req, res) {
 // access value of :filename with req.params.filename
 	var filename = req.params.filename;
 // read the file with the specified filename
 	var filedata = fs.readFileSync('./public/' + filename, 'utf-8');
	res.send(filedata);
 // send the contents of the file to the user
});


var server = app.listen(6086, function() {
	console.log('Express server listening on port ' + server.address().port);
});
