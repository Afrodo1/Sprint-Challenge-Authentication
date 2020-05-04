const express = require('express');

const apiRouter = require('./api-router.js')
const configureMiddleware = require('./configure-middleware.js')
const Users = require('../users/users-model.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.status(200).json('Hello from the server!');
  });
module.exports = server;
