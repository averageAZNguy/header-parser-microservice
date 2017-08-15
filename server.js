var express = require('express');
var app = express();
var getClientAddress;

// Get client IP address from request object ----------------------
getClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
};

app.use(express.static('public'));

app.get("/", function (request, response) {
  var client_ip = getClientAddress(request);
  var lang = request.headers['accept-language'].split(",")[0];
  var OS = request.headers['user-agent'].split('(')[1].split(")")[0]
  var api = {
    ipaddress : client_ip, language: lang, software: OS
  }
  var result = JSON.stringify(api)
  response.end(result)
 
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
