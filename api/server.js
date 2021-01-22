// build your server here
const express = require('express');

const server = express();

server.use(express.json());

module.exports = server;