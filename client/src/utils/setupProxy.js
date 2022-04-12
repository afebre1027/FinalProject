const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api/auth/steam', { target: 'http://localhost:3001/' }));
  app.use(
    proxy('/api/auth/steam/return*', { target: 'http://localhost:3001/' })
  );
};
