module.exports = [
  { packagePath: "./plugins/express"},
  { packagePath: "./plugins/static", root: ["/static"] },
  { packagePath: "./plugins/httpserver", 
    port: process.env.PORT || 8080,
    host: process.env.IP || "0.0.0.0"
  }
];
