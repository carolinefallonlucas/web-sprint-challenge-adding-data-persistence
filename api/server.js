// build your server here
const express = require('express');
const ProjectRouter = require('./task/router')
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter)

module.exports = server;