var express = require('express');
var app = express();
var conf = require('./config');
var ejs = require('ejs');
var compression = require('compression');
var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || process.env.PORT || 3000);

//enables and instantiates express-toobusy, which keeps it from melting under HIGH pressure
app.use(require('express-toobusy')());

// compress responses
app.use(compression());

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var data = Object.keys(conf).sort();
  var dataStr = '';
  data.forEach(function(cur,i,ar){
    dataStr += '<a class="list-group-item" href="' + conf[cur] + '">' + cur + '</a>';
  });
  res.render('pages/index', {
      listing: dataStr
  });
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
