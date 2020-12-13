const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/users');
const sundayLeagues = require('./routes/sundayLeagues');
const sundayLeagueTeam = require('./routes/sundayLeagueTeam');

const cors = require('cors');

// load environment variables. 

const dotenv_config = {};

if (process.env.ENV_FILE) {
  dotenv_config.path = `${__dirname}/.env.${process.env.ENV_FILE}`;
}

const dotenv = require('dotenv').config(dotenv_config);

if (!dotenv) {
  throw new Error('No .env file found.');
}

// process.env.NODE_PATH = __dirname;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    process.env.ENV_FILE === 'test' ? console.log('Test MongoDB successfully connected') : console.log('MongoDB successfully connected');
  })
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// Routes
app.use('/users', users);
app.use('/sunday-leagues', sundayLeagues);
app.use('/sunday-leagues/team', sundayLeagueTeam);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = app;
