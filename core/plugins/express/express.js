module.exports = function (options, imports, register) {
  var express = require('express'),
  app = express();

  app.use(function (req, res, next) {
    return next();
  });
  
  register(null, {
    express: {
      app: app
    }
  });

};
