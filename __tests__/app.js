var supertest = require('supertest');
var host = 'localhost';
var port = 3000;
var url = 'http://' + host + ':' + port;
var myApi = supertest(url);
var path = require('path');
var conf = require(path.join(__dirname, '..', './config'));

describe('main app', function () {
  it('serves listing from /', function () {
    myApi
      .get('/')
      .set('Accept', 'text/html')
      .expect(200)
      .expect('Content-Type', /html/);
  });
});

describe('main app redirection of /:id', function () {
  var blogKey = 'devblog';
  it('redirects /devblog to edm00se.io', function () {
    myApi
      .get('/' + blogKey)
      .set('Accept', 'application/json')
      .expect(302)
      .expect('Location', conf[blogKey]);
  });
  var ghKey = '';
  it('redirects gh to github.com/edm00se', function () {
    myApi
      .get('/' + ghKey)
      .set('Accept', 'application/json')
      .expect(302)
      .expect('Location', conf[ghKey]);
  });
});
