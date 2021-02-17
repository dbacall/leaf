const express = require('express');
const app = express();
const database = require('./src/loaders/database');
const server = require('./src/loaders/server');
const env = require('./src/loaders/env');
const getRoutes = require('./src/loaders/routes');

// load environment variables.

env();

// connect to database

database();

// get all api routes

getRoutes(app);

// create server connection

server(app);

module.exports = app;
