const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Creating express server
const app = express();

app.use('/', createProxyMiddleware({
    target: "http://103.134.154.100:8546",
    changeOrigin: true,
    ws: true
}));

const PORT = process.env.PORT || 3002;
app.listen(PORT);