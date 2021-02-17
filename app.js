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

// create server connection

server(app);

// get all api routes

getRoutes(app);

module.exports = app;
