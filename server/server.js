const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/users');
const sundayLeagues = require('./routes/sundayLeagues');

const cors = require('cors');

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err));
} else {
  mongoose
    .connect(
      'mongodb+srv://dbacall:fsl20@cluster0.vekgo.mongodb.net/fantasy-sunday-league-test?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connected to test database!'))
    .catch((err) => console.log(err));
}

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
// Routes
app.use('/users', users);
app.use('/sunday-leagues', sundayLeagues);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = app;
