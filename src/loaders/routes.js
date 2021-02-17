const users = require('../api/user');
const therapist = require('../api/therapist');
const meeting = require('../api/meeting');
const photo = require('../api/photo');

module.exports = (app) => {
  // Routes
  app.use('/api/users', users);
  app.use('/api/therapist', therapist);
  app.use('/api/meeting', meeting);
  app.use('/api/photo', photo);
};
