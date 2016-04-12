var express = require('express');
var app = express();
var conf = require('./config');
var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || process.env.PORT || 3000);

app.get('/', function (req, res) {
  var data = Object.keys(conf).sort();
  var str = '<h3>Available routes:</h3><hr /><ul>';
  data.forEach(function(cur,i,ar){
  	str += '<li><a href="' + conf[cur] + '">' + cur + '</a></li>';
  });
  str += '</ul>';
  res.send(str);
});

app.get('/api', function(req, res){
  res.set('Content-Type', 'application/json; charset=utf-8');
  res.send(conf);
});

app.get('/.well-known/acme-challenge/'+process.env.LETS_ENCRYPT_ROUTE, function(req, res){
  res.send(process.env.LETS_ENCRYPT_VERIFICATION);
});

app.get('/:id', function(req , res){
  if (!conf[req.params.id]) {
  	res.status(404).send('<h3>Error: 404</h3>');
  } else {
    res.redirect(conf[req.params.id]);
  }
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
