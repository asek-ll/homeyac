module.exports = function (options, imports, register) {
  var staticHandler = require('express')['static'],
  pathes = options.root || [],
  cwd = process.cwd();

  pathes.forEach(function (path) {
    if ( typeof path === 'string' ) {
      imports.express.app.use(staticHandler(cwd+path));
    } else if ( typeof path === 'Object' ) {
      imports.express.app.use(path.prefix, staticHandler(cwd+path.path));
    } 
  });

  register(null);

};
