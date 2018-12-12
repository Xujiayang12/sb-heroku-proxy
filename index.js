var httpProxy = require('http-proxy');

var port = 8000;

var routing = {
  '/': { port: 80, host: sb-heroku-proxy01.herokuapp.com }
}

var server = httpProxy.createServer(
  require('./lib/proxy.js')(routing)
).listen(port);