const users = require('../api/user');
const therapist = require('../api/therapist');
const meeting = require('../api/meeting');
const photo = require('../api/photo');


module.exports = (app) => {
  // Routes
  app.use('/users', users);
  app.use('/therapist', therapist);
  app.use('/meeting', meeting);
  app.use('/photo', photo);
};
