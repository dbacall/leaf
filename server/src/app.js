const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const users = require('./routes/users');
const sundayLeagues = require('./routes/sundayLeagues');
const sundayLeagueTeam = require('./routes/sundayLeagueTeam');

const cors = require('cors');
const database = require('./loaders/database')

// load environment variables. 

const dotenv_config = {};

if (process.env.ENV_FILE) {
  dotenv_config.path = `${__dirname}/config/.env.${process.env.ENV_FILE}`;
}

const dotenv = require('dotenv').config(dotenv_config);

if (!dotenv) {
  throw new Error('No .env file found.');
}

// process.env.NODE_PATH = __dirname;

// connect to database

database();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());



// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// Routes
app.use('/users', users);
app.use('/sunday-leagues', sundayLeagues);
app.use('/sunday-leagues/team', sundayLeagueTeam);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`));

module.exports = app;
