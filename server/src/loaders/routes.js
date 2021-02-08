const users = require('../api/user');
const therapist = require('../api/therapist');

module.exports = (app) => {
  // Routes
  app.use('/users', users);
  app.use('/therapist', therapist);
};
