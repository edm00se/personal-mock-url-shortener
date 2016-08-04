var supertest = require('supertest');
var host = 'localhost';
var port = 3000;
var url = 'http://' + host + ':' + port;
var myApi = supertest(url);

describe('API', function () {
  it('serves application/json content at /api', function () {
    myApi.get('/api')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
