const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const express = require('express');

module.exports = (app) => {
  // serve the react app
  app.use(express.static(path.join(__dirname, '../../client/build')));

  app.use(cors());

  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(bodyParser.json());

  // compress all responses
  app.use(compression());

  // Passport middleware
  app.use(passport.initialize());

  // Passport config
  require('../config/passport')(passport);

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server up and running on port ${port}!`));
};
