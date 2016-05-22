var path = require('path');
var conf = require(path.join(__dirname,'..','./config'));

module.exports = function(app){
  /**
   * @api {get} /api Available Routes
   * @apiName Routes
   * @apiGroup Routes
   * @apiVersion 1.0.0
   *
   * @apiSuccess {Object[]} routes Available Routes for the api.
   */
  app.get('/api', function(req, res, next){
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send({"routes": conf});
  });

  /**
   * @api {get} /api/:id Request User information
   * @apiName RouteById
   * @apiGroup Routes
   * @apiVersion 1.0.0
   *
   * @apiParam {String} id Route identifier.
   *
   * @apiSuccess {Boolean} error Error status for the requested id.
   * @apiSuccess {String} id ID of the request.
   * @apiSuccess {String} value Value of the requested route.
   */
  app.get('/api/:id', function(req, res, next){
    res.set('Content-Type', 'application/json; charset=utf-8');
    if( !!conf[req.params.id] ){
      res.status(200);
      res.send({"error": false, "id": req.params.id, "value": conf[req.params.id]});
    } else{
      res.status(404);
      res.send({"error": true, "message": "/api/"+req.params.id+" not found"});
    }
  });
};
