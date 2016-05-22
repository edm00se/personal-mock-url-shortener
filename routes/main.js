var express = require('express');
var path = require('path');
var conf = require(path.join(__dirname,'..','./config'));

module.exports = function(app){

  // set up the GET routes themselves
  app.get('/', function (req, res, next) {
    var data = Object.keys(conf).sort();
    var dataStr = '';
    data.forEach(function(cur,i,ar){
      dataStr += '<a class="list-group-item" href="' + conf[cur] + '">' + cur + '</a>';
    });
    res.render('pages/index', {
        listing: dataStr
    });
  });

  app.get('/:id', function(req , res, next){
    if (!conf[req.params.id]) {
      res.status(404).send('<h3>Error: 404</h3>');
    } else {
      res.redirect(conf[req.params.id]);
    }
  });
};
