var path = require('path'), 
core = require(path.join(__dirname,'core'));

core.init(function (app) {
  //console.log(app.services.httpServer.server.address());
});
