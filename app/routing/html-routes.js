
var bodyParser = require('body-parser');
var path = require('path');
//var server = server('server.js');

 module.exports = function(app){

	app.get('/', function(req, res){
		
		res.sendFile(path.join(__dirname, "..", "public", 'home.html'));
	});

	app.get('/', function(req, res){
		
		res.sendFile(path.join(__dirname, "..", 'public', 'survey.html'));
	});
};