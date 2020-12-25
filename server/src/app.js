const express = require('express');
const app = express();
const database = require('./loaders/database');
const server = require('./loaders/server');
const env = require('./loaders/env');

// load environment variables.

env();

// connect to database

database();

// create server connection

server(app);

module.exports = app;
