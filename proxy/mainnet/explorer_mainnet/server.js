const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: "http://103.250.11.64:3000",
    changeOrigin: true,
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT);