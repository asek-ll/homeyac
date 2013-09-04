module.exports = function (options, imports, register) {
  var http = require('http'),
  server = http.createServer(imports.express.app),
  port = options.port || 3000,
  host = options.host || 'localhost';

  server.listen(port, host, function (err) {
    register(null, {
      httpServer: {
        server: server
      }
    });
  });
};
