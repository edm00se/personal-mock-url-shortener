var path = require('path');
var conf = require('edm00se-urls');

module.exports = function (app) {
  // Set up the GET routes themselves
  app.get('/', function (req, res) {
    var data = Object.keys(conf).sort();
    var dataStr = '';
    data.forEach(function (cur) {
      dataStr +=
        '<a class="list-group-item" href="' + conf[cur] + '">' + cur + '</a>';
    });
    res.render('pages/index', {
      listing: dataStr
    });
  });

  app.get('/:id', function (req, res) {
    if (conf[req.params.id]) {
      res.redirect(302, conf[req.params.id]);
    } else {
      res.status(404).send('<h3>Error: 404</h3>');
    }
  });
};
