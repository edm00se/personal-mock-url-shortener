var express = require('express');
var path = require('path');

// export a function that accepts `app` as a param
module.exports = function (app) {

    app.use(express.static(path.join(__dirname,'..','/static')));

    app.get('/.well-known/acme-challenge/'+process.env.LETS_ENCRYPT_ROUTE, function(req, res){
      res.send(process.env.LETS_ENCRYPT_VERIFICATION);
    });

    require('./api')(app);
    require('./main')(app);
    // add new lines for each other module, or use an array with a forEach
};
