const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/chart", {
      target: "http://localhost:8040",
      changeOrigin: true,
    })
  );
};
