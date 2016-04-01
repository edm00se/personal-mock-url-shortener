var express = require('express');
var app = express();
var conf = require('./config');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  var data = Object.keys(conf).sort();
  var str = '<h3>Available routes:</h3><hr /><ul>';
  data.forEach(function(cur,i,ar){
  	str += '<li><a href="' + conf[cur] + '">' + cur + '</a></li>';
  });
  str += '</ul>';
  res.send(str);
});

app.get('/:id', function(req , res){
  if (!conf[req.params.id]) {
  	res.status(404).send('<h3>Error: 404</h3>');
  } else {
    res.redirect(conf[req.params.id]);
  }
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});