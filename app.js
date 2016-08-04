var fs = require('fs');
var express = require('express');
var app = express();

var calc = require('./calc.js');

app.use('/static', express.static(__dirname));

app.get('/', function(req, res) {
	res.send(fs.readFileSync('./index.html', 'UTF-8'));
	// res.sendFile(__dirname + '/index.html');
});

app.get('/send-twice', function(req, res) {
	// send multiple times
	res.write('Hello ' + calc.add(8, 9));
	//res.write('=8+9');
	//res.end();
});

app.get('/style.css', function(req, res) {
	res.sendFile(__dirname + '/style.css');
});

app.get('/test', function(req, res) {
	res.send('Yes, this is a test');
	// for (var x in req.query) {
	// 	console.log(x + ': ' + req.query[x]);
	// }
	// res.send('see the console');
});

app.get('/add/:a/:b',function(req, res){
	res.send((paresInt(req.params.a) + paresInt(req.params.b)).toString());
});

app.get('/kerker' , function(req,res){
	
		var a ={
		id: 1,
		title:'haha',
		content:'hello'
		}
			var b = [1,2,3,4];
			b.push(5);
			res.json(a)
			
			var hehe ='[1,2,3,4,5]';
			var hehe_arr = JSON.parse(hehe);
			//res.json(hehe)
			
			var haha = [1,2,3,4,5];
			var haha_jjj = JSON.stringify(haha);
	
		
	})


// > 1024
app.listen(4876, function(err) {
	console.log('Listening on port 4876');
});