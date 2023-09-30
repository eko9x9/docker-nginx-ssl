const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Creating express server
const app = express();

app.use('/', createProxyMiddleware({
    target: "http://103.187.146.17:8545",
    changeOrigin: true,
}));

const PORT = process.env.PORT || 3004;
app.listen(PORT);