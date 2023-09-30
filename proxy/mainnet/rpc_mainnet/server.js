const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Creating express server
const app = express();

app.use('/', createProxyMiddleware({
    target: "http://103.134.154.100:8545",
    changeOrigin: true,
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT);