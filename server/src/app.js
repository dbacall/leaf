const express = require('express');
const app = express();
const database = require('./loaders/database');
const server = require('./loaders/server');

// load environment variables.

const dotenv_config = {};

if (process.env.ENV_FILE) {
  dotenv_config.path = `${__dirname}/config/.env.${process.env.ENV_FILE}`;
}

const dotenv = require('dotenv').config(dotenv_config);

if (!dotenv) {
  throw new Error('No .env file found.');
}

// connect to database

database();

server(app);

module.exports = app;
