var path = require('path');
var architect = require("architect");

var configPath = path.join(__dirname, "config.js");
var config = architect.loadConfig(configPath);
var init;

init = function (next) {
  architect.createApp(config, function (err, app) {
    if (err) {
      throw err;
    }
    next(app);
  });
};

module.exports = {
  init: init
};
