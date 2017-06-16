var supertest = require('supertest');
var host = 'localhost';
var port = 3000;
var url = 'http://' + host + ':' + port;
var myApi = supertest(url);

describe('API documentation', function () {
  it('serves html content at /docs/', function () {
    myApi
      .get('/docs')
      .set('Accept', 'text/html')
      .expect(200)
      .expect('Content-Type', /html/);
  });
});
