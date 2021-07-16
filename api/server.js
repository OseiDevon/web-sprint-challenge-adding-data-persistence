// build your server here and require it from index.js
const express = require('express')

const server = express();

server.use(express.json());

server.use ('*', (res, req) => { //eslint-disable-line
  res.status(404).json({
    message:'catch-all'
  })
})
module.exports = server;
