const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Creating express server
const app = express();

app.use('/', createProxyMiddleware({
    target: "http://103.13.206.64:8502",
    changeOrigin: true,
}));

// if not in production use the port 5000
const PORT = process.env.PORT || 7072;
console.log('server started on port:',PORT);
app.listen(PORT);