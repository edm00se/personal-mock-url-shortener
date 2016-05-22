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

require("./routes")(app);

//establish simple text catch for Error 500
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send("<h1>Error 500</h1>\nSomething broke! The error has been logged to the server console.");
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
