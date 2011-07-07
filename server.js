var http = require('http');
var connect = require('connect');
var app = connect.createServer()
  //.use(connect.favicon())
  //.use(connect.logger())
  //.use(connect.static(__dirname + '/public'))
  .listen(process.env.PORT || 8001);
 
connect.router(function(app){
  app.get('/', function(req, res, next){
    res.simpleBody(200, "Hello Connect");
  });
})