var express = require('express');
var app = express();
var port = 8080;
app.get('/',function(req,res){
	var ips = req.headers['x-forwarded-for'] //||  req.connection.remoteAddress;
	var connection = req.connection;
	console.log("headers",typeof req.headers['accept-language'])
	res.end(ips);
})


app.listen(port)
console.log("The server is starting on port:",port)